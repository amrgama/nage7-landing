import React from 'react'
import { PencileLoading } from './PencileLoading'

export default function MainLoading() {
    return (
        <div className="w-full h-[100dvh] flex items-center justify-center z-50">
            <PencileLoading classNames={"text-[80px] md:text-[100px]"}/>
        </div>
    )
}
