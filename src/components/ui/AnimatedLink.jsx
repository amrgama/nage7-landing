import React from 'react'
import { PencileLoading } from '../PencileLoading'
import { Link } from 'react-router-dom'

export default function AnimatedLink({text, color, ...props}) {
   return (
        <Link
            {...props}
            className={`relative w-fit inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium capitalize transition-all bg-primary-300 rounded-full hover:bg-white group ${props.className}`}
            style={{backgroundColor: `${color} !important` || ""}}
        >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span
                style={{"--color": color}}
                className={`relative w-full text-white transition-colors duration-200 ease-in-out ${!!color? "group-hover:text-[var(--color)]": "group-hover:text-primary-300"}`}
            >
                {text}
            </span>
        </Link>
   )
}
