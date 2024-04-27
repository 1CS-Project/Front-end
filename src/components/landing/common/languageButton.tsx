import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const locales: Record<string, Record<string, string>> = {
    "en": {
      "flag": "fi-sh",
      "name": "English"
    },
    "fr": {
      "flag": "fi-re",
      "name": "French"
    },
    "ar": {
      "flag": "fi-dz",
      "name": "Arabic"
    }
  }

function LanguageButton() {
    
    const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();


    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // const closeDropdown = () => {
    //   setIsOpen(false);
    // };
  
    return ( 
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

     );
}

export default LanguageButton;