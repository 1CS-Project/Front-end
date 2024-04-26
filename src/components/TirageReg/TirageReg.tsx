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
import MahremModal from "./mahram/mahremModel";
import UseAwaitableModal from "./useAwaitableModal";


type props={
    token:string
}

async function getHadjInfo(token:string,id:string){
            
    let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/hadj-info?userId=${id}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    if (!re.ok){
        throw Error("Unauthorized access")
    }
    let k= await re.json()
    
    return k.data;
}

export async function registerTirage(data:Record<string,any>,token:string){
    let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/register-tirage`,{
        method:"POST",
        body:JSON.stringify({...data,imageUrl:"ddd"}),
        headers:{
            "Authorization":`Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!re.ok){
        console.log("error")
    }else{
        console.log("done")
    }
}


function TirageReg({token}:props) {


    let {openModal,renderModal}=UseAwaitableModal(token,(modalApi,params)=>(
        <MahremModal modalApi={modalApi} data={params!.data}  token={token} mahremId={params!.mahremId}/> 
    ))

    const submitHandle:SubmitHandler<tirageRegT>=async (d,e)=>{

        e?.preventDefault()
        /// check if user already registered
        let user= await getHadjInfo(token,d.nationalIdNumber)
        if (user){
            console.log("user already exist");
            return ;
        }


        let {mahremRelation,mahremId,...remaining}=d
        if (d.gender==="female"){
            let data=await getHadjInfo(token,mahremId!)
            let result=await openModal({mahremId,data});
            if (result &&result.accepted){
                await registerTirage(d,token);
            }
        }else{
            await registerTirage(remaining,token)
        }
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
            mahremId: "555555535555555555",
            mahremRelation: "husband",
            nationalIdNumber: "123456789123456789",
            passportNumber:"123456789",
            passportExpirationDate: "2025-03-12",
            phoneNumber: "+213959595959",
            imageUrl:"http://localhost:3000/en/tirage_reg",
            state: "dd"
    }})
    const showAdditional=useWatch<tirageRegT>({name:"gender",control})==="female"
    
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

                    <button  className="mt-8 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>
                </form>
            </div>
            {renderModal()}
        </div>
     );
}

export default TirageReg;