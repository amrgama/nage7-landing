import { useTranslation } from 'react-i18next';
// import i18nConfig from '@/i18nConfig';
import { GrLanguage } from "react-icons/gr";

export default function LanguageChanger({classNames, ...buttonProps}) {
  const {i18n}= useTranslation()
    // const [currentLang, setCurrentLang]= useState(i18n.language)

    const changeLanguage = (lang)=>{
      console.log("lang", lang);
        i18n.changeLanguage(lang);
        document.documentElement.setAttribute("dir", lang === "en"? "ltr": "rtl")
    }

    const handleClick = ()=>{
      console.log("i18n.lang", i18n.language)
        // setCurrentLang(prev => prev === "en"? "ar": "en")
        changeLanguage(i18n.language === "en"? "ar": "en")
    }

  return (
    <div className={`font-medium text-s text-base text-white hover:text-primary-300 transition-colors duration-150 ${classNames || ""}`}>
      <button onClick={handleClick} className="flex items-center justify-center" value={"ar"} {...buttonProps}>
        <GrLanguage className='me-1' />
        {i18n.language === "ar"? "En": "ع"}
      </button>
    </div>
  );
}