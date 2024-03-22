"use client";


import { TirageRegSchemaF, tirageRegT } from "@/schema/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import InputText from "./inputText";
import InputOption from "./inputOption";
import InputFile from "./inputFile";
import { useEffect, useState } from "react";
import MerhremInfo from "./merhremInfo";
import { z } from "zod";
import { useTranslations } from "next-intl";



function TirageReg() {

    const t= useTranslations("tirageForm")
    const TirageRegSchema=TirageRegSchemaF(t)
    const {register,handleSubmit,getValues,control,formState:{errors}} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema),shouldUnregister:true})
    const showAdditional=useWatch<tirageRegT>({name:"gender",control})==="female"
    console.log(errors);
    console.log(getValues());

    // let d="2024-06-10"
    // let de=d.split("-")
    // let e=new Date(parseInt(de[0]),parseInt(de[1]),parseInt(de[2]))
    // let current=new Date();

    // let y=Math.floor((e.getTime()-current.getTime())/(1000*60*60*24));
    // let m=(e.getTime()-current.getTime())/(1000*60*60*24*30)-y*1;
    // let dy=(e.getTime()-current.getTime()-m)/(1000*60*60*24);

    // console.log(y);
    // console.log(m);
    // console.log(dy);

    
    
    return ( 
        <div>
            <h1 className="px-10 flex items-center gap-x-4">
                <span className={"font-Abril text-7xl px-5 border-b border-black pb-2"}>01</span>
                <span className={"font-Open text-4xl font-medium"}>Register</span>
            </h1>
            <div className="mt-10 w-full">
                <form id="form1" onSubmit={handleSubmit((e)=>{
                    console.log(e);
                })}>
                    {/* <input  type="text" {...register("first_name")}/> */}
                    {/* {errors.first_name?.message} */}
                    <div  className="flex gap-x-[2%] gap-y-3 flex-wrap">
                        <InputText field="firstname" label="First name" placeholder="Enter your first name" register={register} error={errors.firstname?.message} />
                        <InputText field="lastname" label="Last name" placeholder="Enter your last name" register={register} error={errors.lastname?.message} />
                        <InputText field="phoneNumber" label="Phone number" placeholder="Enter your phone number" register={register} error={errors.phoneNumber?.message} />
                        <InputText field="birthCerteficateNumber" label="Birth certificate number" placeholder="Enter your Birth certificate number" register={register} error={errors.birthCerteficateNumber?.message} />
                        <InputText field="city" label="City" placeholder="Enter your city" register={register} error={errors.city?.message} />
                        <InputText field="state" label="State" placeholder="Enter your state" register={register} error={errors.state?.message} />
                        <InputText field="nationalIdNumber" label="National identification number (PASSPORT)" placeholder="Enter your passport number" register={register} error={errors.nationalIdNumber?.message} />
                        <InputText field="passportExpirationDate" label="Expiration date"  register={register} error={errors.passportExpirationDate?.message}  type="date"/>
                        <InputText field="dateOfBirth" label="Birth date"  register={register} error={errors.dateOfBirth?.message}  type="date"/>
                        <InputOption field="gender" label="Gender" register={register} error={errors.gender?.message} />
                        <InputFile/>
                    </div>
                        {showAdditional&&<MerhremInfo errors={errors} register={register} />}

                    <button className="mt-10 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>
                </form>
                
            </div>
        </div>
     );
}

export default TirageReg;