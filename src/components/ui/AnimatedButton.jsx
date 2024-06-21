import React from 'react'
import { PencileLoading } from '../PencileLoading'

export default function AnimatedButton({text, isLoading, buttonProps}) {
   return (
        <button
            {...buttonProps}
            className={`relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-primary-400 rounded-full hover:bg-white group ${buttonProps.className}`}
        >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary-400">
                {
                    !isLoading?
                        <>{text ?? "submit"}</>
                    :
                        <PencileLoading />
                }
            </span>
        </button>
   )
}
