'use client'
import { useState } from 'react';
import Link from "next/link";
import { useLocale,  } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from './FormInput';
import { useRouter } from 'next/navigation';
import { handleLogin } from '@/app/action';
import ForgetPassword from './ForgotPassword';
import Image from 'next/image';


const authSchema=z.object({
  Email:z.string().email(),
  Password:z.string().min(8,"password length must be at least 8"),
  Name:z.string().trim().min(2).optional(),
  Phone_Number:z.string().regex(/^(07|06|05)\d{8}$/).optional()

})

export type authType=z.infer<typeof authSchema>





function SignUp() {
  const locale = useLocale();
  const router=useRouter()

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<authType>({shouldUnregister:true,resolver:zodResolver(authSchema)})
  
  const [showForm, setShowForm] = useState(false);
  const [signInMode, setSignInMode] = useState(false);
  
  const handleSignInClick = () => {
    clearErrors("root.error")
    setShowForm(!showForm);
    setSignInMode(!signInMode);
  };


  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  

  const handleSignIn:SubmitHandler<authType>=async (e)=>{
    let {Email,Password}=e
    try {
      let r=await handleLogin(Email,Password)
  
      if (r.loggedIn){
        router.push("/"+locale)
      }else{
        setError("root.error",{message:r.error})
      }
      
    } catch (error) {
      setError("root.error",{message:"Please try again later"})
      
    }

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
        
        let r=await handleLogin(e.Email,e.Password)
        console.log(r);
        
        if (r.loggedIn){
          router.push("/"+locale+"/confirmation")
        }else{
          setError("root.error",{message:"Account created,Please try to sign in"})
        }
      }else{
        setError("root.error",{message:(await re.json()).message})
        
      }
      
    } catch (error) {
        setError("root.error",{message:"Please try again"})
      }
    }

  

  return (
    <div className="w-full h-screen flex items-start">
      <div className={`relative w-1/2 h-full flex flex-col hidden sm:block ${showForm ? 'animate-slide-right' : 'animate-slide-left'}`}>
        <div className="absolute top-[50%] left-[30%] flex-col ">
          <p className="text-3xl text-center text-white amiri-quran-regular ">وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ</p>
        </div>
        <Image
          priority
          src={signInMode ? "/image/signin.png" : "/image/signup.png"}
          alt={signInMode ? "signin" : "signup"}
          width={400}
          height={400}
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
                  <button type='button' className="btn text-end hover:underline" onClick={openModal}>Forgot password ?</button>
                </>
              </div>

            )}
            <button
              type="submit"
              className="text-white font-medium ml-0 bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl m-4 w-full border-gradient">
              {signInMode ? 'Sign in' : 'Sign up'}
            </button>
          </form>
          {signInMode&&<ForgetPassword/>}
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
