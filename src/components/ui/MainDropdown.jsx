import React, { useEffect, useRef } from 'react'
export const MainDropdown = ({props ,className, bodyClassNames, show, children})=> {
  const toggledClasses= show? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-5";

 return (
    <div 
      {...props}
      className={`w-full min-w-fit text-sm ${toggledClasses} duration-200 z-10 absolute end-0 top-full mt-2 transition-all ${className ?? ""}`}
    >
        <ul aria-labelledby="dropdownDefaultButton" className={`w-full max-h-full shadow rounded-lg bg-white divide-y divide-gray-100 scroll-style overflow-y-auto text-black ${bodyClassNames ?? ""}`}>
            {children}
        </ul>
    </div>
  )
}
