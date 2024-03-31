'use client'
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLocale, useTranslations } from "next-intl";


type props = {
  user?:string
}

const locales:Record<string,Record<string,string>>={
  "en":{
    "flag":"fi-sh",
    "name":"English"
  },
  "fr":{
    "flag":"fi-re",
    "name":"French"
  },
  "ar":{
    "flag":"fi-dz",
    "name":"Arabic"
  }
}


function Header({ user }: props) {
  const [navbar, setNavbar] = useState(false)
  const t = useTranslations("home");
  const locale=useLocale();
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState(user?"black":'white')
  const [shadow, setShadow] = useState('shadow-xl')
  const handleNavbar = () => {
    setNavbar(!navbar)
  };


  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
        setShadow('shadow-xl')

      } else {
        setColor('transparent')
        if (user){
          setTextColor('#000000')
        }else{
          setTextColor('#ffffff')
        }
      }
    };
    window.addEventListener('scroll', changeColor)
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div style={{ backgroundColor: `${color}`, boxShadow: `${shadow}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div style={{ color: `${textColor}` }} className={"flex justify-between p-4 px-20 bg-transparent  m-auto "+ (user?"text-black":"text-white")}>
        <div className="font-semibold text-2xl">
          Makkah
        </div>
        <div className="gap-x-6 hidden sm:flex items-center">
          <Link href={"/journey"}>
            <h1 className="font-semibold hover:underline">
              {t("journey")}
            </h1>

          </Link>
          <Link href={"/steps"}>
            <h1 className="font-semibold hover:underline">
              {t("Steps")}
            </h1>
          </Link>
          <Link href={"/conditions"}>
            <h1 className="font-semibold hover:underline">
              {t("Conditions")}
            </h1>
          </Link>
          <Link href={"/tirage"}>
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
        <div className="hidden sm:flex">
          <div className='w-full'>
            <div className="relative inline-block">
              <button
                type="button"
                className="px-2 py-2 text-black bg-white font-medium rounded-lg text-sm inline-flex items-center"
                onClick={toggleDropdown}
              >
                <div className="flex justify-center items-center gap-4">
                  <span className={`fi ${locales[locale].flag}`}></span>
                  <p>{locales[locale].name}</p>
                </div>
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-1 origin-top-right absolute right-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <li>
                      <Link
                        href="/en"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        // onClick={() => handleLanguageChange({ name: 'English', flag: 'fi-sh' })}
                      >
                        <div className="flex justify-center items-center gap-4">
                          <span className="fi fi-sh"></span>
                          <p>English</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        // onClick={() => handleLanguageChange({ name: 'French', flag: 'fi-re' })}
                      >
                        <div className="flex justify-center items-center gap-4">
                          <span className="fi fi-re"></span>
                          <p>French</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ar"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        // onClick={() => handleLanguageChange({ name: 'Arabic', flag: 'fi-dz' })}
                      >
                        <div className="flex justify-center items-center gap-4">
                          <span className="fi fi-dz"></span>
                          <p>Arabic</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

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