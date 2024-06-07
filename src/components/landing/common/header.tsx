'use client'
import Link from "next/link";
import {  useEffect, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLocale, useTranslations } from "next-intl";
import LanguageButton from "./languageButton";
import ProfileWidget from "./profileWidget";
import { usePathname } from "next/navigation";


type props = {
  user?: string
}

let withWhiteText=["/en","/ar","/fr"]



function Header({ user }: props) {
  const pathname = usePathname();
  
  const blackText=user || !withWhiteText.includes(pathname)

  const [navbar, setNavbar] = useState(false)
  const t = useTranslations("home");
  const locale = useLocale();
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState(blackText ? "black" : 'white')
  const [shadow, setShadow] = useState('shadow-xl')

  const handleNavbar = () => {
    setNavbar(!navbar)
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor('#ffffff')
      setTextColor('#000000')
      setShadow('shadow-xl')

    } else {
      setColor('transparent')
      if (blackText) {
        setTextColor('#000000')
      } else {
        setTextColor('#ffffff')
      }
    }
  };

  useEffect(() => {
    if (!withWhiteText.includes(pathname)){
      setClickedConditions(false);
      setClickedSteps(false);
    }
    changeColor()
    window.addEventListener('scroll', changeColor)
    return ()=>{
      window.removeEventListener('scroll', changeColor)
    }
  }, [pathname])

  useEffect(()=>{
    console.log("rendered");
    
    if (window.location.hash.length!==0&&withWhiteText.includes(pathname)){
      if (window.location.hash==="#steps-section"){
          setClickedSteps(true)
      }else if (window.location.hash==="#conditions-section"){
          setClickedConditions(true)
      }
    }
  },[])

  const [clickedSteps, setClickedSteps] = useState(false);
  const [clickedConditions, setClickedConditions] = useState(false);


  const isJourney=pathname.endsWith("/journey")
  const isTirage=pathname.endsWith("/tirage")
  const isHotels=pathname.endsWith("/hotels")



  const handleConditionsClick = () => {
    setClickedConditions(true);
    setClickedSteps(false);
  };
  
  const handleStepsClick = () => {
    setClickedConditions(false);
    setClickedSteps(true);
  };

  return (
    <div style={{ backgroundColor: `${color}`, boxShadow: `${shadow}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div style={{ color: `${textColor}` }} className={"flex justify-between p-4 px-20 bg-transparent  m-auto " + (blackText ? "text-black" : "text-white")}>
        <div className="font-semibold text-2xl">
          <Link href={"/"} >
            Makkah
          </Link>

        </div>
        <div className="gap-x-6 hidden sm:flex items-center">
          <Link href={"/" + locale + "/journey"}>
            <h1 className={`font-semibold hover:underline ${isJourney ? "active-link" : ""}`}
            >
              {t("journey")}

            </h1>

          </Link>
          <Link href={"/" +locale+ "#steps-section"}>
            <h1 className={`font-semibold hover:underline ${clickedSteps ? "active-link" : ""}`}
              onClick={handleStepsClick}
            >
              {t("Steps")}
            </h1>
          </Link>
          <Link href={"/" +locale+ "#conditions-section"}>
            <h1 className={`font-semibold hover:underline ${ clickedConditions? "active-link" : ""}`}

              onClick={handleConditionsClick}
            >
              {t("Conditions")}
            </h1>
          </Link>

          <Link href={"/" + locale + "/tirage"}>
            <h1 className={`font-semibold hover:underline ${isTirage? "active-link":""}`}>
              {t("Tirage")}
            </h1>
          </Link>
          <Link href={"/" + locale + "/hotels"}>
            <h1 className={`font-semibold hover:underline ${isHotels ? "active-link" : ""}`}>
              {t("AboutUs")}
            </h1>

          </Link>

        </div>

        {user?<ProfileWidget user={user}/>:<LanguageButton/>}

        <div onClick={handleNavbar} className="block sm:hidden z-10">
          {navbar ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg> : <svg style={{ color: `${textColor}` }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          }
        </div>
        {  /* respo Mobile*/}

        <div className={navbar ? "sm:hidden absolute top-0 right-0 bottom-0 left-0 justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 pt-40 "
          : "sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 "}>
          <Link href={"/" + locale + "/journey"}>
            <h1 className="font-semibold text-black p-5 hover:underline ">
              {t("journey")}
            </h1>
          </Link>
          <Link href={"/" + "#steps-section"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("Steps")}
            </h1>
          </Link>
          <Link href={"/" + "#conditions-section"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("Conditions")}
            </h1>
          </Link>
          <Link href={"/" + locale + "/tirage_att"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("Tirage")}
            </h1>
          </Link>
          <Link href={"/" + locale + "/hotels"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("AboutUs")}
            </h1>

          </Link>

        </div>



      </div>
    </div>
  );
}

export default Header;