import ErrorMark from "@/components/landing/common/icons/errorMark";
import { FormEventHandler, useState } from "react";


function ForgetPassword() {

    let [emailSent,setEmailSent]=useState<string|undefined>(undefined);
    let [error,setError]=useState<string|undefined>(undefined)
    const submit:FormEventHandler<HTMLFormElement>=async (e)=>{
        e.preventDefault();
        const form=e.currentTarget;
        const formData=new FormData(form);
        const Email=formData.get("email");

        try {
            let re=await fetch(process.env.NEXT_PUBLIC_BACKEND+"/api/SendUrlForgetPassword",{
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  },
                body:JSON.stringify({Email})
              })
            if (re.ok){
                setEmailSent(Email as string)
            }else {
              setError((await re.json()).message);
              
            }
        } catch (error) {
            console.log(error);
            
        }


  }

  return (
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
          <p id="message" className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {emailSent ? `We just emailed a reset link to ${emailSent} .Click the link and you’ll be prompted to choose a new password.` : "Please enter your email or mobile number to search for your account. "}
          </p>
        </div>
        {!emailSent &&
          <div className="mt-5">
            {/* <form id='resetPassForm' onSubmit={submit}> */}
            <form id='resetPassForm' onSubmit={submit}>
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
                      <input type="email" name="email" className="py-3 border-2 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
                      {error&&<div className="absolute top-[30%] right-2">
                        <ErrorMark/>
                      </div>}
                  </div>
                      <p
                         className=" text-sm text-red-600 my-1 mx-1"
                         id="email-error"
                      >
                        {error}
                      </p>
                  </div>
                </div>
                <button
                  type="submit"
                  form='resetPassForm'
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-r from-buttonleft to-buttonright text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Send email
                </button>
            </form>

          </div>}
      </div>
    </dialog>
  );
}

export default ForgetPassword;