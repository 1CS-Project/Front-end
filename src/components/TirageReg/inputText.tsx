import { tirageRegT } from "@/schema/zodSchemas";
import { UseFormRegister } from "react-hook-form";

import { Open_Sans } from "next/font/google";
import Error from "../landing/common/icons/error";

type props={
    register:UseFormRegister<tirageRegT>,
    error?:string,
    type?:"date"|"text"
    label:string,
    placeholder?:string,
    field:"firstname" | "lastname" | "phoneNumber" | "birthCerteficateNumber" | "city" | "state" | "nationalIdNumber" | "passportExpirationDate" | "dateOfBirth" | "imageUrl" | "gender"
}



function InputText({register,error,field,label,placeholder,type="text"}:props) {
    
    
    return ( 
        <div className="font-Open basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">{label}</h1>
            <div className="relative ">
                <input className={"outline-none border w-full pr-8 pl-4 py-2 rounded-md  "+(error?"border-[#E64040]":"focus:border-black/40")} {...register(field)} placeholder={placeholder} type={type} />
                {error&&<div className="absolute top-1.5 right-1">
                    <Error/>
                </div>}

            </div>
            {error&&
                <h1 className="text-[#E64040] text-sm py-1">{error}</h1>
            }
        </div>
     );
}

export default InputText;