'use client'
import { useState } from 'react';
import Link from "next/link";
import { useLocale } from 'next-intl';



function SignUp() {
  const locale = useLocale();

  const [showForm, setShowForm] = useState(false);
  const [signInMode, setSignInMode] = useState(false);

  const handleSignInClick = () => {
    setShowForm(!showForm);
    setSignInMode(!signInMode);
  };

  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };


  return (
    <div className="w-full h-screen flex items-start">
      <div className={`relative w-1/2 h-full flex flex-col hidden sm:block ${showForm ? 'animate-slide-right' : 'animate-slide-left'}`}>
        <div className="absolute top-[50%] left-[30%] flex-col ">
          <p className="text-3xl text-center text-white amiri-quran-regular ">وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ</p>
        </div>
        <img
          src={signInMode ? "/image/signin.png" : "/image/signup.png"}
          alt={signInMode ? "signin" : "signup"}
          className="w-full h-full object-cover object-left"
        />


      </div>

      <div className={`md:w-1/2 w-full h-full flex flex-col px-10 py-5 justify-around ${showForm ? 'show-form' : ''}`}>
        <Link href={"/" + locale + "/"} className="flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <p className="font-semibold ml-2">Return</p>
        </Link>
        <div className="w-full flex flex-col ">

          <div className="w-full flex flex-col">
            <h3 className="flex justify-center font-semibold text-2xl mb-2">{signInMode ? 'Sign in' : 'Create an Account'}</h3>
          </div>

          <form>
            {!signInMode && (
              <div className="w-full flex flex-col mb-1">
                <p className="font-medium text-[0.9em] mb-1">Full Name</p>
                <input type="text" placeholder="Enter your full name" className="w-full text-black bg-transparent px-4 py-2 mb-2 border border-[#d1d5db] rounded-md bg-[#f9fafb]" required />
              </div>
            )}
            <div className="w-full flex flex-col mb-1">
              <p className="font-medium text-[0.9em] mb-1">E-mail</p>
              <input type="email" placeholder="example@exemple.com" className="w-full text-black bg-transparent px-4 py-2 mb-2  border border-[#d1d5db] rounded-md bg-[#f9fafb]" required />
            </div>
            {!signInMode && (
              <div className="w-full flex flex-col mb-1">
                <p className="font-medium text-[0.9em] mb-1">Phone number</p>
                <input type="tel" placeholder="Enter your phone number" className="w-full text-black bg-transparent px-4 py-2 mb-2  border border-[#d1d5db] rounded-md bg-[#f9fafb]" required />
              </div>
            )}
            <div className="w-full flex flex-col">
              <p className="font-medium text-[0.9em] mb-1">Password</p>
              <input type="password" placeholder="••••••••••" className="w-full text-black bg-transparent px-4 py-2 mb-2  border border-[#d1d5db] rounded-md bg-[#f9fafb]" required />
            </div>
            {signInMode && (
              <div className="w-full flex flex-col mb-1">
                <button type='button' className='text-end hover:underline'></button>
                <>
                  <button className="btn text-end hover:underline" onClick={openModal}>Forgot password ?</button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* If there is a button in the form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                    </div>
                    <div className="p-8 sm:p-7">
                      <div className="text-center">
                        <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                          Forgot password?
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Please enter your email or mobile number to search for your account.                          
                        </p>
                      </div>
                      <div className="mt-5">
                        {/* Form */}
                        <form>
                          <div className="grid gap-y-4">
                            {/* Form Group */}
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Email address
                              </label>
                              <div className="relative">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="py-3 border-2 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                  required
                                  aria-describedby="email-error"
                                />
                                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                  <svg
                                    className="size-5 text-red-500"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                  </svg>
                                </div>
                              </div>
                              <p
                                className="hidden text-xs text-red-600 mt-2"
                                id="email-error"
                              >
                                Please include a valid email address so we can get back to you
                              </p>
                            </div>
                            {/* End Form Group */}
                            <button
                              type="submit"
                              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-buttonleft to-buttonright text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              Send email
                            </button>
                          </div>
                        </form>
                        {/* End Form */}
                      </div>
                    </div>
                  </dialog>
                </>
              </div>

            )}

            <div className="w-full flex flex-col">
              <Link href={signInMode ? `/${locale}/hero` : `/${locale}/confirmation`}>
                <button
                  type="submit"
                  className="text-white font-medium ml-0 bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl m-4 w-full border-gradient"
                >
                  {signInMode ? 'Sign in' : 'Sign up'}
                </button>
              </Link>
            </div>
          </form>

          <div className="w-full flex items-center justify-center">
            <hr className="w-1/4 border-t-1 border-gray-500" />
            <span className="mx-4">Or</span>
            <hr className="w-1/4 border-t-1 border-gray-500" />
          </div>
          <div className="w-full items-center flex justify-center ">
            <button
              aria-label="Sign in with Google"
              className="flex items-center justify-center bg-white border border-button-border-light rounded-full px-12 py-2"
            >
              <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    className="fill-[#4285f4]"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    className="fill-[#34a853]"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    className="fill-[#fbbc05]"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    className="fill-[#ea4335]"
                  />
                </svg>
              </div>

              <p onClick={handleSignInClick} className="cursor-pointer">{signInMode ? 'Sign in with Google' : 'Sign up with Google '}</p>


            </button>
          </div>

          <div className="w-full items-center flex justify-center mt-2">
            <p onClick={handleSignInClick} className="cursor-pointer">{signInMode ? 'Don\'t have an account ? ' : 'Already have an account ? '}<span className="text-[#CA9335] underline">{signInMode ? 'Sign up' : 'Sign in'}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
