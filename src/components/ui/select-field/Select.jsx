import React, { useEffect, useMemo, useRef, useState } from 'react'
import FieldError from '../FieldError'
import Option from './Option';
// import { SelectDropdown } from './SelectDropdown';
import { useTranslation } from 'react-i18next';
import { PencileLoading } from '../../PencileLoading';
import { MainDropdown } from '../MainDropdown';


export default function Select({icon, onChange, label, labelKey, valueKey, requireFlag, isLoading, props, errors, options, selectValue, value, selectClassName, seletBtnClassName, direction, children}) {
    const {t}= useTranslation();
    const [select, setSelect] = useState({...selectValue});
    const [show, setShow] = useState(false);
    const selectRef = useRef();
    const dropdownRef = useRef();
//   const isPartialVisible = usePartialVisibility(dropdownRef);
//     console.log("label", label, "isPartialVisible", isPartialVisible)
  const onClick = ()=>{
    setShow(prev => !prev)
  }
    const hide= (e)=> {
      if(e.target !== selectRef.current && !selectRef.current?.contains(e.target)){
        if(show){
            setShow(false)
        }
      }       
    }
//   console.log("show", show)
    const onSelect= (label, value)=>{
        // console.log("onSelect", label, value)
        onChange(value);
        setSelect({label, value}); 
        setShow(false);
    }
  useEffect(()=>{
      window.addEventListener("click",hide)
      return ()=> window.removeEventListener("click", hide)
  })
//   console.log("selectBefore", "value", value, "select", select, "options", options)
//   console.log("selectErrors", errors.groups)
//   useEffect(()=>{
//     window.sessionStorage.setItem(`select_${props.name}`, JSON.stringify(select));
//   }, [select])

  useEffect(()=>{
    setSelect(selectValue)
    if(!!selectValue?.value){
        // console.log("selectValue", selectValue)
        onChange(selectValue.value)
        setShow(false);
    }
  }, [selectValue, setSelect])
//   useEffect(()=>{
  useMemo(()=>{
      if(!!value){
          setSelect(prev => {
              if(prev?.value !== value){
                // console.log("value", value, "select", select)
                const filteredValue = options.filter((option)=>{
                    return option[valueKey || "value"] === value;
                })[0]
                // console.log("filteredValue", filteredValue)

                if(!!!filteredValue) return prev;
                return {label: filteredValue[labelKey || "label"], value: filteredValue[valueKey || "value"]}
            }
            return prev
        })
    }
    else if(value === ""){
        setSelect({});
    }
  }, [value, options])

    return (
    <div ref={selectRef} className={`relative text-black text-sm ${selectClassName ?? ""}`}> 
        {
            !!label &&
            <label htmlFor={props.id} className="block mb-2 capitalize text-nowrap text-sm font-medium text-slate-400">
                {t(label)} {requireFlag && <span className="text-red-400">*</span> }
            </label>
        }
        <div className="relative">
            <button
                onClick={onClick}
                data-dropdown-toggle="dropdown" 
                disabled={props?.disabled === true}
                className={`w-full h-full rounded-lg p-3 text-center overflow-hidden inline-flex gap-3 items-center justify-between disabled:bg-gray-50 border ${seletBtnClassName ?? ""}`}
                type="button"
            >
                {
                    (!!props.placholder && !!!select?.value && select?.value !== 0)? 
                        <span className="text-slate-400 font-normal text-nowrap overflow-hidden">{props.placholder}</span>
                    :
                    <span className='text-nowrap overflow-hidden'>
                        {t(select?.label ?? selectValue?.label)}
                    </span>
                }
                {
                    isLoading?
                        <PencileLoading className={"!w-[10px] !h-[10px]"} />
                    :
                     <>
                        {
                            !!icon?
                                icon
                            :
                                <svg className="w-2.5 h-2.5 ms-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                        }
                     </>
                }
            </button>
            <MainDropdown
                props={{ref: dropdownRef, id:"select-dropdown"}} 
                show={show} 
                // className={`${(isPartialVisible || direction === "top")? "!bottom-full !top-[unset]":""} !mt-0`} bodyClassNames={"!max-h-80"}
                className={`${(direction === "top")? "!bottom-full !top-[unset]":""} !mt-0`} bodyClassNames={"!max-h-80"}
            >
                {

                    (!!isLoading)?
                        <li className={`px-3 py-1.5`}>
                            loading...
                        </li>
                    :
                        <>
                            {
                                !!!children?
                                    <>
                                        {
                                            options?.map((option, i)=>{
                                                return(
                                                    <Option key={i} label={option[labelKey  || "label"]} value={option[valueKey || "value"]} active={select?.value === option[valueKey || "value"]} getValue={onSelect} />
                                                )
                                            })
                                        }
                                    </>
                                :
                                    <>{children}</>
                            }
                            
                        </>
                }
            </MainDropdown>
        </div>
        <FieldError errorMsg={errors[props.name]?.message} />
    </div>
  )
}
