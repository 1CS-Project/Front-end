'use client'
import Link from "next/link";
import {  useEffect, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLocale, useTranslations } from "next-intl";
import LanguageButton from "./languageButton";
import ProfileWidget from "./profileWidget";
import { usePathname, useSearchParams } from "next/navigation";


type props = {
  user?: string
}

let withWhiteText=["/en","/ar","/fr"]



function Header({ user }: props) {
  const pathname = usePathname();
  
  // console.log(searchParams.getAll());
  
  
  const blackText=user || !withWhiteText.includes(pathname)

  console.log(blackText);
  

  const [navbar, setNavbar] = useState(false)
  const t = useTranslations("home");
  const locale = useLocale();
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState(blackText ? "black" : 'white')
  const [shadow, setShadow] = useState('shadow-xl')

  const handleNavbar = () => {
    setNavbar(!navbar)
  };

  function onHashChange(){
    console.log(window.location.hash);
    
    if (window.location.hash.length!==0){
      if (window.location.hash==="#steps-section"){
        document.getElementById("esteps-section")?.classList.add("active-link")
        document.getElementById("econditions-section")?.classList.remove("active-link")
      }else if (window.location.hash==="#conditions-section"){
        document.getElementById("esteps-section")?.classList.remove("active-link")
        document.getElementById("econditions-section")?.classList.add("active-link")
      }
    }else{
      document.getElementById("esteps-section")?.classList.remove("active-link")
      document.getElementById("econditions-section")?.classList.remove("active-link")
    }
  }

  useEffect(() => {
    
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
          console.log("white");
          
          setTextColor('#ffffff')
        }
      }
    };

    changeColor();
    onHashChange();
    window.addEventListener('scroll', changeColor)
    return ()=>{
      window.removeEventListener('scroll', changeColor)
    }
  }, [pathname])



  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [clickedConditions, setClickedConditions] = useState(false);
  // const [clickedSteps, setClickedSteps] = useState(false);
  // const [clickedJourney, setClickedJourney] = useState(false);
  const isJourney=pathname.endsWith("/journey")


  const handleConditionsClick = () => {
    // setClickedConditions(true);
    // setClickedSteps(false);
    // setClickedJourney(false);
  };
  
  const handleStepsClick = () => {
    // setClickedSteps(true);
    // setClickedConditions(false);
    // setClickedJourney(false);
  };

  const handleJourneyClick = () => {
    // setClickedSteps(false);
    // setClickedConditions(false);
    // setClickedJourney(true);
  };



  return (
    <div style={{ backgroundColor: `${color}`, boxShadow: `${shadow}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div style={{ color: `${textColor}` }} className={"flex justify-between p-4 px-20 bg-transparent  m-auto "}>
        <div className="font-semibold text-2xl">
          <Link href={"/"}>
            Makkah
          </Link>

        </div>
        <div className="gap-x-6 hidden sm:flex items-center">
          <Link href={"/" + locale + "/journey"}>
            <h1 className={`font-semibold hover:underline ${isJourney ? "active-link" : ""}`}>
              {t("journey")}
            </h1>

          </Link>
          <Link onClick={()=>{
            console.log("click");
            
            onHashChange()
          }} id="esteps-section" href={"/" +locale+ "#steps-section"}>
            <h1 className={`font-semibold hover:underline `}>
              {t("Steps")}
            </h1>
          </Link>
          <Link onChange={()=>{
            onHashChange()
          }} id="econditions-section" href={"/" +locale+ "#conditions-section"}>
            <h1 className={`font-semibold hover:underline `}>
              {t("Conditions")}
            </h1>
          </Link>

          <Link href={"/" + locale + "/tirage"}>
            <h1 className="font-semibold hover:underline">
              {t("Tirage")}
            </h1>
          </Link>
          <Link href={"/hotel"}>
            <h1 className="font-semibold hover:underline">
              {t("Hotel")}
            </h1>

          </Link>

        </div>

        {user?<ProfileWidget/>:<LanguageButton/>}

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
          <Link href={"/journey"}>
            <h1 className="font-semibold text-black p-5 hover:underline ">
              {t("journey")}
            </h1>
          </Link>
          <Link href={"/steps"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("Steps")}
            </h1>
          </Link>
          <Link href={"/conditions"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("Conditions")}
            </h1>
          </Link>
          <Link href={"/tirage"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("Tirage")}
            </h1>
          </Link>
          <Link href={"/hotel"}>
            <h1 className="font-semibold text-black p-5 hover:underline">
              {t("Hotel")}
            </h1>

          </Link>

        </div>



      </div>
    </div>
  );
}

export default Header;