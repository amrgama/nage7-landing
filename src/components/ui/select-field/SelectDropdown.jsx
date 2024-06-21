import React from 'react'
import MainDropdown from '../MainDropdown'
import Option from './Option'


export const SelectDropdown = ({options, select, onSelect, show, children}) => {
   
  return (
    <MainDropdown show={show} className={"!mt-0"}>
        {
            !!!children?
                <>
                    {
                        options.map((option, i)=>{
                            return(
                                <Option key={i} {...option} active={select?.value === option?.value} getValue={onSelect} />
                            )
                        })
                    }
                </>
            :
                <>{children}</>
        }
    </MainDropdown>
  )
}
