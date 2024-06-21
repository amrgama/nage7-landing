import React, { useEffect, useRef, useState } from 'react'
import FieldError from './FieldError';

export default function Textarea ({label, requireFlag, register, errorMsg, wrapperClassName, textareaClassName, textareaProps}){
    const errorEleHeight = useRef(0);

    useEffect(()=>{
        errorEleHeight.current= !!errorMsg? "24px" : "0px"
    }, [errorMsg, register])
    return (
        <div className={`${wrapperClassName}`}>
            {
                !!label &&
                <label htmlFor={textareaProps.id} className="block mb-2 capitalize text-sm font-medium text-slate-400">
                    {label} {requireFlag && <span className="text-red-400">*</span> }
                </label>
            }
            <textarea
                {...register}
                {...textareaProps}
                className={`border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 resize-none ${textareaClassName ?? ""} placeholder:text-slate-400`}
            />
            {
                !!errorMsg &&
                <FieldError errorMsg={errorMsg} />
            }
        </div>
    )
}
