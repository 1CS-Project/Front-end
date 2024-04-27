import { getUser } from "@/app/action";

async function UserData() {
    let data=await getUser()
    return ( 
        <div className="mt-12 col-span-2">
            <div className="max-w-lg ">
                <div className="bg-red-500 rounded-full m-auto  w-[60px] h-[60px] flex items-center justify-center text-white">
                {data?.name.charAt(0)}
                </div>

            </div>
        {/* <div className="relative items-center max-w-sm mx-auto">
          <img
            className="w-20 h-20 rounded-full"
            src="/hmdlh.jpg"
            alt=""
          />
          <svg className="bottom-0 left-14 absolute  w-9 h-9  border-white dark:border-gray-800 rounded-full" width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_572_10503)">
              <circle cx="26.2759" cy="23.0528" r="18.1763" fill="white" />
              <g clip-path="url(#clip0_572_10503)">
                <path
                  d="M20.7803 28.9602H23.6315L31.1158 21.4759C31.303 21.2887 31.4515 21.0664 31.5529 20.8218C31.6542 20.5772 31.7063 20.315 31.7063 20.0503C31.7063 19.7855 31.6542 19.5234 31.5529 19.2787C31.4515 19.0341 31.303 18.8119 31.1158 18.6247C30.9286 18.4375 30.7064 18.289 30.4617 18.1876C30.2171 18.0863 29.955 18.0342 29.6902 18.0342C29.4255 18.0342 29.1633 18.0863 28.9187 18.1876C28.6741 18.289 28.4518 18.4375 28.2646 18.6247L20.7803 26.109V28.9602Z"
                  stroke="#2A2A2A" stroke-width="1.42559" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.5513 19.3374L30.4025 22.1886" stroke="#2A2A2A" stroke-width="1.42559"
                  stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_572_10503" x="0.0723782" y="0.862849" width="52.407" height="52.407"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4.01362" />
                <feGaussianBlur stdDeviation="4.01362" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_572_10503" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_572_10503" result="shape" />
              </filter>
              <clipPath id="clip0_572_10503">
                <rect width="17.1071" height="17.1071" fill="white" transform="translate(17.9277 14.7041)" />
              </clipPath>
            </defs>
          </svg>


        </div> */}

        <form className=" items-center max-w-lg mt-9 ">

          <div className="relative w-full">
            <label
              htmlFor="name"
              className="block text-sm mb-2 dark:text-white text-left"
            >
              Full Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={data?.name}
              required
            />

          </div>

          <div className="relative w-full mt-3">
            <label
              htmlFor="email"
              className="block text-sm mb-2 dark:text-white text-left"
            >
              E-mail
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={data?.email}
              required
            />

          </div>
          <div className="relative w-full mt-3">
            <label
              htmlFor="phone"
              className="block text-sm mb-2 dark:text-white text-left"
            >
              Phone number
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={data?.phone_number}
              required
            />

          </div>
          <div className="relative w-full mt-3">
            <label
              htmlFor="password"
              className="block text-sm mb-2 dark:text-white text-left"
            >
              Password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="****************"
              required
            />

          </div>


        </form>

        <div className=" items-center max-w-lg">
          <button
            type="submit"
            className="text-white font-medium ml-0 bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl m-4 w-full border-gradient"
          >
            Update changes
          </button>
        </div>

      </div>
     );
}

export default UserData;