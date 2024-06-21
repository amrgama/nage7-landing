import React from 'react'
import { MaintLink } from '../MaintLink';
import AnimatedLink from '../ui/AnimatedLink';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';


export const Hero = () => {
  const {t, i18n} = useTranslation();

  return (
    <main id='home' className='min-h-fit bg-primary-900 py-[4.5rem]' style={{height: "100dvh"}}>
      <div className="container h-full flex gap-5">
        <div className="h-full flex flex-col content-center justify-center gap-">
          <span className="text-[40px] !leading-[1.4] xs:text-5xl sm:text-[58px] md:text-7xl lg:text-[57px] xl:text-7xl font-medium text-transparen text-white bg-gradiant bg-clip-text">
            {t("hero.text-1")}
          </span>
          <span className={`text-[29px] xs:text-[34px] sm:text-[40px] md:text-5xl lg:text-[41px] xl:text-5xl capitalize xl:!leading-[1.4 !leading-loose font-extrabold`}>
            {/* {t("hero.title").split("<placeholder/>")[0]}
            <br/>
            {t("hero.title").split("<placeholder/>")[1]}
            <br/> */}
            {t("hero.text-2").split("<placeholder/>")[0]}
            <span className="text-transparent bg-gradiant bg-clip-text ms-1">{t("nagehApp")}</span>
            
          </span>  
          <span className="max-w-[530px] text-gray-300 text-[15px] md:text-[16px]">
            {t("hero.description").split("<br/>")[0]}<br/>
            {t("hero.description").split("<br/>")[1]}
          </span>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-nowrap mt-7">
            <AnimatedLink text={t("getStartNow")} className={"text-[16px] sm:text-lg text-lg h-[50px] sm:h-[55px] pointer-events-none opacity-80"} to= {""} />
            <MaintLink target="_blank" to="https://play.google.com/store/apps/details?id=com.rts.nage7&hl=en&gl=US" className={"group link-button !h-[50px] sm:!h-[55px] !max-h-fit text-[16px] sm:text-lg !bg-transparent border border-white capitalize text-nowrap relative py-3 px-4 ps-[60px] sm:ps-[64px] ms-[0.25px]"}>
                <div className="h-[50px] sm:h-[55px] w-[50px] sm:w-[55px] flex items-center justify-center group-hover:w-full absolute -start-[0.25px] group-hover:start-0 rounded-full border-[0.25px] border-white group-hover:border-white border-transparent bg-primary-900 transition-all duration-200">
                    <IoLogoGooglePlaystore className='text-2xl sm:text-3xl text-primary-90 text-white' style={{transform: (i18n.language === "ar") && "rotateY(180deg)"}} />
                </div>
                {t("downloadStudentApp")}
            </MaintLink>
          </div>
          {/* <MaintLink text= to={""} className={"link-button px-5 py-3 capitalize text-lg w-fit"} /> */}
        </div>
        <div className="h-full hidden lg:flex flex-col content-center justify-center gap-5 ms-auto">
          <div className="w-[480px] xl:w-[500px] h-[480px] flex flex-wrap relative">
          <img src={"/images/hero-img.png"} alt='hero image' className='object-center object-contain' />
          </div>
        </div>
      </div>
    </main>
  )
}
