import React from 'react'
import { PencileLoading } from '../PencileLoading'
import SpinnerLoading from './SpinnerLoading'

export default function Button({text, isLoading, children, ...buttonProps}) {
   
    return (
        <button
            {...buttonProps}
        >
            {
                !isLoading?
                    <>{text ?? "submit"}</>
                :
                    <PencileLoading />
                    // <SpinnerLoading />
            }
        </button>
    )
}
