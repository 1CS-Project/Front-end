"use client";


import { TirageRegSchema, tirageRegT } from "@/schema/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Abril_Fatface,Open_Sans } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const Abril=Abril_Fatface({subsets:["latin"],weight:["400"]})

const open_sans=Open_Sans({weight:"variable",subsets:["latin"]})


function TirageReg() {
    const {register,handleSubmit,formState:{errors}} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema)})

    // const submit:SubmitHandler<any>=(data)=>console.log(data);
    
    return ( 
        <div>
            <h1 className="px-10 flex items-center gap-x-4">
                <span className={Abril.className+" text-7xl px-5 border-b border-black pb-2"}>01</span>
                <span className={open_sans.className+" text-4xl font-medium"}>Register</span>
            </h1>
            <div>
                <form onSubmit={handleSubmit(()=>{
                    console.log("helllo");
                    
                })}>
                    <h1>First name</h1>
                    <input  type="text" {...register("first_name")}/>
                    {errors.first_name?.message}
                    <button type="submit">submit</button>
                </form>
                
            </div>
        </div>
     );
}

export default TirageReg;