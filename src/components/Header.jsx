import React, { useEffect, useState } from 'react'
import { MaintLink } from './MaintLink';
import { navbarConfig } from '../utils/config';
import useMediaQuery from '../hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';
import { MainDropdown } from './ui/MainDropdown';
import LanguageChanger from './LanguageChanger';
import { BsPersonWalking } from "react-icons/bs";
import { Link } from 'react-router-dom';

// import { useTranslation } from 'react-i18next';

export const Header = () => {
    const {t, i18n} =  useTranslation();
    const isLargScreen = useMediaQuery("(max-width: 1024px)")
    const [show, setShow] = useState(false);
    const onClick = ()=> setShow(prev => !prev);

    const renederedLists = navbarConfig.map((link, i)=>(
        <li key={i}>
            {
                !!link?.target?
                    <a href={"#"+link.target} className={`${link.disabled? "disbaled": ""} w-full flex items-center justify-center px-3 py-4 lg:py-1 capitalize hover:text-info-400 transition-colors duration-150 active active:text-primary-400`}>{t(link.label)}</a>
                :
                    <Link to={link.to} className={`${link.disabled? "disbaled": ""} w-full flex items-center justify-center px-3 py-4 lg:py-1 capitalize hover:text-info-400 transition-colors duration-150 active active:text-primary-400`}>{t(link.label)}</Link>
            }
        </li>
    ))

  return (
    <header className='w-full h-[66px] text-white bg-primary-900 fixed top-0 z-50 overflow-x-clip overflow-y-visible'>
        <nav className="flex flex-wrap items-center justify-between gap-3 sm:gap-5 mx-auto px-4 py-3">
            <Link to="https://flowbite.com/" className="flex items-center space-x-1.5 rtl:space-x-reverse">
                <img src="/images/small-logo.svg" className="" alt="Flowbite Logo" width={40} height={40} />
                <span className="self-center text-xl font-semibold whitespace-nowrap">Nage<span className="text-primary-30 italic text-xl font-extrabold">7</span></span>
            </Link>
            <div className="flex-1 flex items-center" id="navbar-default">
                {
                    isLargScreen?
                         <MainDropdown className={"px-4 lg:px-0"} show={show}>
                            {renederedLists}
                            <li className="flex justify-center items-center">
                                <MaintLink to="https://nage7-rds.com/nage7-teacher/" className={"group link-button !w-fit capitalize text-nowrap relative ps-12 mx-3 my-4 h-[42px]"}>
                                    <div className="h-[41px] w-[40px] flex items-center justify-center group-hover:w-full group-hover:h-[42px] absolute -start-0.5 group-hover:start-0 rounded-full border-[0.25px] group-hover:border-primary-900 border-transparent bg-white transition-all duration-200">
                                        <BsPersonWalking className='text-base sm:text-xl text-primary-90 text-primary-900' style={{transform: (i18n.language === "ar") && "rotateY(180deg)"}} />
                                    </div>
                                    {t("login.teacher")}
                                </MaintLink>
                            </li>
                        </MainDropdown>
                    :
                    <ul className="font-medium hidden md:flex items-center p-0 border border-gray-100 rounded-lg md:flex-row md:border-0 mx-auto absolute md:static">
                            {renederedLists}
                        </ul>
                }
                <div className='flex items-center gap-3 sm:gap-5 ms-auto lg:ms-0'>
                    <LanguageChanger />
                    {
                        !isLargScreen &&
                        <MaintLink to="https://nage7-rds.com/nage7-teacher/" className={"group flex items-center link-button capitalize text-nowrap relative ps-10 sm:ps-12 h-[42px]"}>
                            <div className="h-[41px] w-[40px] flex items-center justify-center group-hover:w-full group-hover:h-[42px] absolute -start-0.5 group-hover:start-0 rounded-full border-[0.25px] group-hover:border-white border-transparent bg-primary-900 transition-all duration-200">
                                <BsPersonWalking className='text-base sm:text-xl text-primary-90 text-white' style={{transform: (i18n.language === "ar") && "rotateY(180deg)"}} />
                            </div>
                            {t("login.teacher")}
                        </MaintLink>
                    }
                </div>
            </div>
            <button 
                onClick={onClick} 
                data-collapse-toggle="navbar-default" 
                type="button" 
                className="group flex lg:hidden w-9 h-9 cursor-pointer items-center justify-center rounded-3xl p-2 relative" 
                aria-controls="navbar-default" 
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-2 relative z-[1]">
                    <span className={`block shadow h-1 w-7 origin-center rounded-full bg-primary-300  transition-all duration-100 delay-100 ease-in-out ${show? "translate-y-1.5 rotate-45": ""}`}></span>
                    <span className={`block shadow h-1 w-4 origin-center rounded-full bg-secondary-300  transition-all duration-100 ease-in-out group-hover:w-7 ${show? "w-7 -translate-y-1.5 -rotate-45 delay-100": ""}`}></span>
                </div>
                <div className={`${!show? "h-1/2 w-1/2": `!h-[100%] !w-[100%] ${i18n.language === "en"? "-translate-x-1/2": "translate-x-1/2"} !start-1/2`} bg-white rounded-full absolute top-1/2 -translate-y-1/2 origin-center transition-all duration-200 z-0`}></div>
            </button>
        </nav>
    </header>
  )
}
