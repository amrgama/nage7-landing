import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Option({label, active, value, getValue}) {
    const onClick = ()=>{
        getValue(label, value);
    }
    const {t}= useTranslation()
    return(
        <li onClick={onClick} className={`px-3 py-1.5 cursor-pointer hover:bg-slate-50/80 hover:text-primary-600 transition-colors duration-200 ${active? "bg-secondary-100/10 text-primary-600": "text-black"}`}>
            {t(label)}
        </li>
    )
}
