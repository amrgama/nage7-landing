import React from 'react'

export default function ModalContainer({className, children, ...props}) {
  return (
    <div 
        tabIndex="-1"
        className={`flex overflow-y-auto overflow-x-hidden scroll-style fixed inset-0 z-50 justify-center items-center bg-black/10 ${className ?? ""}`}
    >
        {children}
    </div>
  )
}
