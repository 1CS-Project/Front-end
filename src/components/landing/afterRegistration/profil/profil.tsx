import UserData from "./userData"


function profil() {

  return (

    <div className="w-full grid grid-cols-3 gap-4 mx-auto items-center justify-between mt-12">
      <div className="mt-12 ">
        <aside
          id="logo-sidebar"
          className="justify-between w-64 transition-transform "  >
          <div className="h-full px-3 dark:bg-white border-gray text-center md:border-r-3 ">
            


            <ul className=" font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 group"
                >
                  <span className="flex-1 whitespace-nowrap ms-3">Profil</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 group"
                >


                  <span className="flex-1 ms-3 whitespace-nowrap">Registration</span>

                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 group"
                >


                  <span className="flex-1 ms-3 whitespace-nowrap">Examination</span>

                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 group"
                >

                  <span className="flex-1 ms-3 whitespace-nowrap">Payment</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 group"
                >

                  <span className="flex-1 ms-3 whitespace-nowrap">Reservation</span>
                </a>
              </li>

            </ul>

          </div>

        </aside>

      </div>

      <UserData/>
    </div>

  )
}

export default profil