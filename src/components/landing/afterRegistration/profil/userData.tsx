import { getUser } from "@/app/action";

async function UserData() {
    let data=await getUser()
    return ( 
        <>


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

      </>
     );
}

export default UserData;