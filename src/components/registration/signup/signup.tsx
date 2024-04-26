'use client'
import { useState } from 'react';
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from './FormInput';
import { redirect, useRouter } from 'next/navigation';
import { handleLogin } from '@/app/action';


const authSchema=z.object({
  Email:z.string().email(),
  Password:z.string().min(8,"password length must be at least 8"),
  Name:z.string().min(2).optional(),
  Phone_Number:z.string().regex(/^(07|06|05)\d{8}$/).optional()

})

export type authType=z.infer<typeof authSchema>





function SignUp() {
  const locale = useLocale();
  const router=useRouter()

  const [showForm, setShowForm] = useState(false);
  const [signInMode, setSignInMode] = useState(false);
  
  const handleSignInClick = () => {
    setShowForm(!showForm);
    setSignInMode(!signInMode);
  };


  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<authType>({shouldUnregister:true,resolver:zodResolver(authSchema)})
  
  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  

  const handleSignIn:SubmitHandler<authType>=async (e)=>{
    let {Email,Password}=e
    let r=await handleLogin(Email,Password)
    // console.log(r);
    if (r&&r.logedIn){
      router.push("/"+locale)
    }
     /*
    try {
      // let re=await signIn("credentials",{redirect:false,Email,Password}) 

      if (re?.ok){
        router.push("/"+locale)
      }else{
       console.log(re);
       if (re?.error){
         setError("root.error",{message:re.error})
       }else{
         setError("root.error",{message:"Please try again"})
       }     
      }
    } catch (error) {
      setError("root.error",{message:"Please try again"})
    }
    */
  }

  const handleSignUp:SubmitHandler<authType>=async (e)=>{

    try {
      let re=await fetch(process.env.NEXT_PUBLIC_BACKEND+"/api/Sign_Up",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          },
        body:JSON.stringify(e)
      })
      if (re.ok){
        // setError("root.verifyEmail",{message:"We have sent an email to verify your account"})
        router.push("/"+locale+"/confirmation")
      }else{
        setError("root.error",{message:(await re.json()).message})
        
      }
      
    } catch (error) {
        setError("root.error",{message:"Please try again"})
      }
    }


    document.getElementById("sendEmailBtn")?.addEventListener("click", function(event) {
      event.preventDefault(); 
      
      const emailInput = document.getElementById("emailInput") as HTMLInputElement | null;
      if (emailInput) {
          const email = emailInput.value;
          const label = document.getElementById("label_email") as HTMLLabelElement | null;
          if (label) {
              label.style.display = "none";
          }
          
        
          const messageDiv = document.getElementById("message") as HTMLDivElement | null;
          if (messageDiv) {
              messageDiv.innerText = `We just emailed a reset link to ${email}.Click the link and you’ll be prompted to choose a new password.`;
              messageDiv.style.display = "block";
          }
        
          emailInput.style.display = "none";
          (this as HTMLButtonElement).style.display = "none";
      }
  });
  

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
          {errors.root?.error&&<h1 className='text-[#E64040] flex justify-center w-full'>
                {errors.root?.error.message}

          </h1>}
          <form onSubmit={signInMode?handleSubmit(handleSignIn):handleSubmit(handleSignUp)}>
            {!signInMode && (
              <FormInput register={register} field='Name' type='text' label='Full Name' error={errors.Name?.message} placeholder="Enter your full name"/>
            )}
            <FormInput register={register} field='Email' type='email' label='Email' error={errors.Email?.message} placeholder="example@exemple.com"/>
            {!signInMode && (
              <FormInput register={register} field='Phone_Number' type='tel' label='Phone number' error={errors.Phone_Number?.message} placeholder="Enter your phone number"/>
            )}
            <FormInput register={register} field='Password' type='password' label='Password' error={errors.Password?.message} placeholder="••••••••••"/>

            {signInMode && (
              <div className="w-full flex flex-col mb-1">
                <button type='button' className='text-end hover:underline'></button>
                <>
                  <button className="btn text-end hover:underline" onClick={openModal}>Forgot password ?</button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                    </div>
                    <div className="p-8 sm:p-7">
                      <div className="text-center">
                        <h2 className="block text-2xl mb-2 font-bold text-gray-800 dark:text-gray-200">
                          Forgot password?
                        </h2>
                        <p  id="message" className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Please enter your email or mobile number to search for your account.                          
                        </p>
                      </div>
                      <div className="mt-5">
                        {/* Form */}
                        <form>
                          <div className="grid gap-y-4">
                            <div>
                              <label
                              id='label_email'
                                htmlFor="email"
                                className="block text-sm mb-2 dark:text-white"
                              >
                                Email address
                              </label>
                              <div className="relative">
                                <input
                                  type="email"
                                  id="emailInput"
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

                            
                            <button
                              type="submit"
                              id="sendEmailBtn"
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
            {/* <div className="w-full flex flex-col"> */}
                <button
                  type="submit"
                  className="text-white font-medium ml-0 bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl m-4 w-full border-gradient"
                >
                  {signInMode ? 'Sign in' : 'Sign up'}
                </button>
            {/* </div> */}
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
