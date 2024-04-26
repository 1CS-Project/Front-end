
function forgotpass() {
  return (
    <div className="m-auto px-[20%] pt-[10%]">
      <div className="text-center">
        <h2 className="block text-2xl mb-2 font-bold text-gray-800 dark:text-gray-200">
          Reset your password
        </h2>
        <p id="message" className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Create a new password that is at least 6 characters long. A strong password is combination of letters, numbers, and punctuation marks.
        </p>

        <div className="mt-5 px-[20%]">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white text-left"
                >
                  New password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="passinput"
                    name="password"
                    placeholder="••••••••••"
                    className="py-3 border-2 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    required
                  />

                </div>
              </div>


              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white text-left"
                >
                  Confirm new password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="passinput"
                    name="password"
                    placeholder="••••••••••"
                    className="py-3 border-2 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    required
                  />

                </div>
              </div>

              <button
                type="submit"
                id="sendEmailBtn"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-buttonleft to-buttonright text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
              Update password
              </button>
            </div>
          </form>
        </div>



      </div>
    </div>
  )
}

export default forgotpass