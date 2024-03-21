import { tirageRegT } from "@/schema/zodSchemas";
import { UseFormRegister } from "react-hook-form";

import Error from "../landing/common/icons/error";

type props={
    register:UseFormRegister<tirageRegT>,
    error?:string,
    label:string,
    field:"firstname" | "lastname" | "phoneNumber" | "birthCerteficateNumber" | "city" | "state" | "nationalIdNumber" | "passportExpirationDate" | "dateOfBirth" | "imageUrl" | "gender"
}



function InputOption({register,error,field,label}:props) {
    
    
    return ( 
        <div className="font-Open basis-[49%]  text-sm h-full">
            <h1 className="text-sm text-[#1E1E1E] py-2">{label}</h1>
            <div className="relative ">
                <div className="py-2 space-x-8 select-none">
                    <label >
                        <input value={"male"} {...register(field)} type="radio"  />
                        <span className="px-2">Male</span>
                    </label>
                    <label >
                        <input value={"female"} {...register(field)} type="radio"  />
                        <span className="px-2">Female</span>
                    </label>
                </div>
                {/* <input className={"outline-none border w-full pr-8 pl-4 py-2 rounded-md  "+(error?"border-[#E64040]":"focus:border-black/40")} {...register(field)} placeholder={placeholder} type={type} /> */}
                {/* {error&&<div className="absolute top-1.5 right-1">
                    <Error/>
                </div>} */}

            </div>
            {error&&
                <h1 className="text-[#E64040] text-sm py-1">{error}</h1>
            }
        </div>
     );
}

export default InputOption;