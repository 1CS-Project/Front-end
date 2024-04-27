"use client";


import { TirageRegSchemaF, tirageRegT } from "@/schema/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import MerhremInfo from "./mahram/merhremInfo";
import { useTranslations } from "next-intl";
import RegInputs from "./RegInputs";
import MahremModal from "./mahram/mahremModel";
import UseAwaitableModal from "./useAwaitableModal";
import { useRouter } from "next/navigation";


type props={
    token:string
}

export async function getHadjInfo(token:string,id:string){
    
    try {
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
    } catch (error) {
        throw error;
    }
    
}

export async function registerTirage(data:Record<string,any>,token:string){
    try {
        
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/register-tirage`,{
            method:"POST",
            body:JSON.stringify({...data,imageUrl:"ddd"}),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    
        if (!re.ok){
            throw Error("Please try again later")
        }else{
            return true;
        }
    } catch (error) {
        throw error;
    }
}


function TirageReg({token}:props) {

    let router=useRouter()
    let {openModal,renderModal}=UseAwaitableModal(token,(modalApi,params)=>(
        <MahremModal modalApi={modalApi} data={params!.data}  token={token} mahremId={params!.mahremId}/> 
    ))

    const submitHandle:SubmitHandler<tirageRegT>=async (d,e)=>{

        e?.preventDefault()
        /// check if user already registered
        try {
            let user= await getHadjInfo(token,d.nationalIdNumber)
            if (user){
                setError("nationalIdNumber",{message:"User already exist"},{shouldFocus:true})
                return ;
            }
        } catch (error) {
            setError("root.error",{message:"Please try again later"},{shouldFocus:true})
            throw error;
        }


        let {mahremRelation,mahremId,...remaining}=d
        try {
            if (d.gender==="female"){
                let data=await getHadjInfo(token,mahremId!)
                let result=await openModal({mahremId,data});
                if (result &&result.accepted){
                    let res=await registerTirage(d,token);
                    if (res){
                        router.refresh()
                    }
                }
            }else{
                let res=await registerTirage(remaining,token);
                if (res){
                    router.refresh()
                }
            }
        } catch (error) {
            setError("root.error",{message:"Please try again later"},{shouldFocus:true})
            throw error;
        }
    }

    const t= useTranslations("tirageForm")
    const TirageRegSchema=TirageRegSchemaF(t);
    
    const {register,handleSubmit,control,formState:{errors},setError} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema),shouldUnregister:true,defaultValues:{
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
        <div className="">
            <h1 className="px-10 mt-10 flex items-center gap-x-4">
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
                    {errors.root?.error&&<h1 className='text-[#E64040] flex justify-center w-full'>
                {errors.root?.error.message}

          </h1>}
                </form>
            </div>
            {renderModal()}
        </div>
     );
}

export default TirageReg;