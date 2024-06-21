import { footerConfig } from '../utils/config'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const {t, i18n: {language}}= useTranslation();

    const QuickLinks = footerConfig.quickLinks.links?.map((item, i)=>{
        return (
            <li key={i} className='block'>
                {
                    !!item.link?
                        <Link to={item.link} className={`${item.disabled? "disbaled": ""} block py-1 px-4 text-gray-500 capitalize hover:text-primary-400 transition-colors duration-150`}>{t(item.label)}</Link>
                    :
                        <a href={item.target} className={`${item.disabled? "disbaled": ""} block py-1 px-4 text-gray-500 capitalize hover:text-primary-400 transition-colors duration-150`}>{t(item.label)}</a>
                }
            </li>
        )
    })

    const SchoolLinks = footerConfig.schoolLinks.links?.map((item, i)=>{
        return (
            <li key={i} className='block'>
                {
                    !!item.link?
                        <Link to={item.link} className={`${item.disabled? "disbaled": ""} block py-1 px-4 text-gray-500 capitalize hover:text-primary-400 transition-colors duration-150`}>{t(item.label)}</Link>
                    :
                        <a href={item.target} className={`${item.disabled? "disbaled": ""} block py-1 px-4 text-gray-500 capitalize hover:text-primary-400 transition-colors duration-150`}>{t(item.label)}</a>
                }
            </li>
        )
    })
    const ContactInfoSocialLinks = footerConfig.contactInfo.socialLinks?.map((item, i)=>{
       const Icon = item.icon;
        return (
            <span key={i} className='w-9 h-9 flex items-center justify-center rounded-full text-white bg-secondary-500'>
                {
                    !!item?.link?
                        <Link to={item.link} className={`${item.disabled? "disbaled": ""} block font-medium capitalize hover:text-info-400 transition-colors duration-150`}><Icon /></Link>
                    :
                        <a href={item.target} className={`${item.disabled? "disbaled": ""} block font-medium capitalize hover:text-info-400 transition-colors duration-150`}><Icon /></a>
                }
            </span>
        )
    })
  return (
    <footer className='py-[4.5rem] bg-primary-100/5'>
        <div className="container relative pt-1">
            <div className="flex flex-wrap justify-between md:justify-evenly gap-9 md:gap-10 mt-[100px">
                <div className="w-full lg:w-fit hidde flex lg:flex items-center flex-col mb-3">
                    <img src="/images/larg-logo.png" alt='logo image' className="block object-contain object-center" width={200} height={200} />
                </div>
                <div className="w-full md:w-fit min-w-48 flex flex-col gap-1">
                    <span className="text-2xl font-medium capitalize text-nowrap text-primary-400 py-2 border-b- border-primary-900">{t(footerConfig.quickLinks.title)}</span>
                    <ul className='min-h-[157px] flex flex-col justify-center border border-t-[5px] border-t-primary-400 border-gray-200 shadow-sm rounded-t-lg rounded-md py-2'>
                       {QuickLinks}
                    </ul>
                </div>
                <div className="w-full md:w-fit min-w-48 flex flex-col gap-1">
                    <span className="text-2xl font-medium capitalize text-primary-400 py-2 border-b- order-primary-900">{t(footerConfig.schoolLinks.title)}</span>
                    <ul className='min-h-[157px] flex flex-col justify-center border border-t-[5px] border-t-primary-400 border-gray-200 shadow-sm rounded-t-lg rounded-md py-2'>
                       {SchoolLinks}
                    </ul>
                </div>
                <div className="w-full md:w-fit min-w-48 flex flex-col gap-1">
                    <span className="text-2xl font-medium capitalize text-primary-400 py-2 border-b- order-primary-900">{t(footerConfig.contactInfo.title)}</span>
                    <ul className='min-h-[157px] flex flex-col justify-center border border-t-[5px] border-t-primary-400 border-gray-200 shadow-sm rounded-t-lg rounded-md py-2'>
                        {/* <li className='block'>
                            <Link to={"/"} className="block py-1 px-4 text-gray-500 hover:text-primary-400">{t(footerConfig.contactInfo.address)}</Link>
                        </li> */}
                        <li className='block'>
                            <Link to={`tel:+201159408650`} className="flex items-center gap-1.5 py-2.5 px-4 text-gray-500 hover:text-primary-300 duration-150 transition-colors"><span className={`text-lg ${language === "en"? "rotate-90": ""}`}>{<footerConfig.contactInfo.phoneIcon/>}</span> {footerConfig.contactInfo.phone}</Link>
                        </li>
                        <li className='block'>
                            <Link to={`mailto:nage7app@gmail.com`} className="flex items-center gap-1.5 py-2.5 px-4 text-gray-500 hover:text-primary-300 duration-150 transition-colors"><span className="text-[23px]"><footerConfig.contactInfo.emailIcon/></span> {footerConfig.contactInfo.email}</Link>
                        </li>
                    </ul>
                    <div className="w-full max-w-80 flex items-center justify-evenly gap-5 mt-3 mx-auto">{ContactInfoSocialLinks}</div>
                </div>
            </div>
        </div>
    </footer>
  )
}
