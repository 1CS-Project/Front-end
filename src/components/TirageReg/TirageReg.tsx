"use client";


import { TirageRegSchemaF, tirageRegT } from "@/schema/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import InputText from "./input/inputText";
import InputOption from "./input/inputOption";
import InputFile from "./input/inputFile";
import { useEffect, useState } from "react";
import MerhremInfo from "./mahram/merhremInfo";
import { useTranslations } from "next-intl";
import ConfirmElement from "./mahram/confirmElement";
import MarhemReg from "./mahram/merhemReg";
import RegInputs from "./RegInputs";


const d:Record<string,string>={
    firstname: "ddd",
    lastname: "55",
    dateOfBirth: "2004-03-25",
    nationalIdNumber: "123456789",
    passportExpirationDate: "2025-03-12",
    };


function TirageReg() {

    const submitHandle:SubmitHandler<tirageRegT>=(d,e)=>{
        e?.preventDefault()
        document.body.classList.add("modalEnabled")
        setShowModal(true)
        console.log(e);
    }

    const t= useTranslations("tirageForm")
    const TirageRegSchema=TirageRegSchemaF(t);
    
    const {register,handleSubmit,control,formState:{errors}} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema),shouldUnregister:true,defaultValues:{
            birthCerteficateNumber: "55555",
            city: "ddd",
            dateOfBirth: "2004-03-25",
            firstname: "ddd",
            gender: "female",
            lastname: "55",
            mahremNationalIdNumber: "555555555",
            mahremRelation: "husband",
            nationalIdNumber: "123456789",
            passportExpirationDate: "2025-03-12",
            phoneNumber: "+213959595959",
            state: "dd"
    }})
    const showAdditional=useWatch<tirageRegT>({name:"gender",control})==="female"

    let [showModal,setShowModal]=useState(false)

    
    return ( 
        <div >
            <h1 className="px-10 flex items-center gap-x-4">
                <span className={"font-Abril text-7xl px-5 border-b border-black pb-2"}>01</span>
                <span className={"font-Open text-4xl font-medium"}>Register</span>
            </h1>
            <div className={"mt-10 w-full"}>
                <form id="form1" onSubmit={handleSubmit(submitHandle)}>
                    <div  className="flex gap-x-[2%] gap-y-3 flex-wrap">
                        <RegInputs errors={errors} register={register}/>
                    </div>
                        {showAdditional&&<MerhremInfo errors={errors} register={register} />}

                    <button className="mt-8 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>
                </form>
            </div>
            {showModal&&
            <div onClick={(e)=>{
                if (e.target){
                    if((e.target as HTMLElement).classList.contains("modal")){
                        document.body.classList.remove("modalEnabled")
                        setShowModal(false)
                    }
                }
                
           }} className="fixed modal top-0 left-0 z-20 overflow-hidden w-screen h-screen flex justify-center items-center bg-black/20">
                <div  className="bg-white p-5 mx-4 sm:mx-0 sm:w-1/2 rounded-md ">
                       <h1 className="font-medium text-xl">Could you please confirm if this is your mahram ?</h1>
                       <div  className="px-3 py-4 rounded-md  mt-5 bg-[#f8f8f8] flex flex-wrap gap-y-8 gap-x-8">
                                <ConfirmElement title={t("firstname.name")} data={d["firstname"]}/>
                                <ConfirmElement title={t("lastname.name")} data={d["lastname"]}/>
                                <ConfirmElement title={t("dateOfBirth.name")} data={d["dateOfBirth"]}/>
                                <ConfirmElement title={t("nationalIdNumber.name")} data={d["nationalIdNumber"]}/>
                                <ConfirmElement title={t("passportExpirationDate.name")} data={d["passportExpirationDate"]}/>
                        </div> 
                        <button className="mt-10 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>
                </div> 



            
                {/* <MarhemReg/> */}
            </div>
            }
        </div>
     );
}

export default TirageReg;