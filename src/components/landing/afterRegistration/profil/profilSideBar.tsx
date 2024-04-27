'use client'
import Link from "next/link";
import { useLocale } from "next-intl";


function ProfilSideBar() {

  const locale=useLocale();

  let activeLink="hello"

  return (

      <div className="mt-12 ">
        <aside
          id="logo-sidebar"
          className="justify-between w-64 transition-transform "  >
          <div className="h-full px-3 dark:bg-white border-gray text-center md:border-r-3 ">
            <ul className=" font-medium">
              <li>
                <Link
                  href={"/"+locale+"/profil"}
                  className={`flex items-center p-4 text-gray-900 rounded-lg dark:text-black ${activeLink === "Profil" ? "bg-gray-100" : "hover:bg-gray-100 dark:hover:bg-gray-100"
                    } group`}
                >
                  <span className="flex-1 whitespace-nowrap ms-3">Profil</span>

                </Link>
              </li>
              <li>
                <Link
                  href={"/"+locale+"/profil/registration"}
                  className={`flex items-center p-4 text-gray-900 rounded-lg dark:text-black ${activeLink === "Registration" ? "bg-gray-100" : "hover:bg-gray-100 dark:hover:bg-gray-100"
                    } group`}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Registration</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/examination"
                  className={`flex items-center p-4 text-gray-900 rounded-lg dark:text-black ${activeLink === "Examination" ? "bg-gray-100" : "hover:bg-gray-100 dark:hover:bg-gray-100"
                    } group`}
                >

                  <span className="flex-1 ms-3 whitespace-nowrap">Examination</span>

                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className={`flex items-center p-4 text-gray-900 rounded-lg dark:text-black ${activeLink === "Payment" ? "bg-gray-100" : "hover:bg-gray-100 dark:hover:bg-gray-100"
                    } group`}
                >

                  <span className="flex-1 ms-3 whitespace-nowrap">Payment</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/reservation"
                  className={`flex items-center p-4 text-gray-900 rounded-lg dark:text-black ${activeLink === "Reservation" ? "bg-gray-100" : "hover:bg-gray-100 dark:hover:bg-gray-100"
                    } group`}
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Reservation</span>
                </Link>
              </li>

            </ul>

          </div>

        </aside>

      </div>


  )
}

export default ProfilSideBar;