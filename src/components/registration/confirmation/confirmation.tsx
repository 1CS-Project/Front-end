"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


type props={
  token:string
}


function Confirmation({token}:props) {

  let router=useRouter()
  const sendEmail=async ()=>{
    let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/SendUrlEmail`,{
      method:"POST",
      headers:{
          "Authorization":`Bearer ${token}`,
      }
    
  });
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-center'>
        <Image
          src="/image/emconf.png"
          width={300}
          height={300}
          alt="confirmation"
          className='mx-auto'
        />
        <p className='font-bold text-xl mt-8'>Email confirmation</p>
        <p className='w-[50%] mx-auto mt-4 text-gray-500'>We&apos;ve just sent an email to you in order to confirm your email address. Please check your inbox and follow the instructions provided
          to complete the confirmation process. Thank you!</p>
        <Link href={"/"} >
          <button type="button"
            className="w-[50%] text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-xl rounded-xl m-4 border-gradient"
          >
            Verify adress email
          </button>
        </Link>
        <p>If you didn&apos;t get any email ? <span onClick={sendEmail} className="text-[#CA9335] cursor-pointer underline">Resend confirmation email</span></p>
      </div>
    </div>
  );
}

export default Confirmation;
