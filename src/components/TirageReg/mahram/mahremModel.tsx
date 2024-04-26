
import { useTranslations } from "next-intl";
import ConfirmElement from "./confirmElement";
import { getToken } from "@/app/action";
import { useEffect, useState } from "react";
import MarhemReg from "./merhemReg";


type props={
    id:string,
    token:string,
    onSubmit:(v?:boolean,data?:Record<string,any>)=>void,
}


function MahremModal({id,token,onSubmit}:props) {
    
    // console.log(token);
    let [data,setData]=useState(null)

    async function getMahremInfo(){
            
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/mahrem-info?mahremId=${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        if (!re.ok){
            throw Error("Unauthorized access")
        }
        let k= await re.json()
        
        setData(k.data);
    }

    useEffect(()=>{
        getMahremInfo()
    },[])
    
    const t=useTranslations("tirageForm");
    

    if (data){
        return ( 
            <div  className="bg-white p-5 mx-4 sm:mx-0 sm:w-1/2 rounded-md ">

                <h1 className="font-medium text-xl">Could you please confirm if this is your mahram ?</h1>
                <div  className="px-3 py-4 rounded-md  mt-5 bg-[#f8f8f8] flex flex-wrap gap-y-8 gap-x-8">
                        <ConfirmElement title={t("firstname.name")} data={data["firstname"]}/>
                        <ConfirmElement title={t("lastname.name")} data={data["lastname"]}/>
                        <ConfirmElement title={t("dateOfBirth.name")} data={data["dateOfBirth"]}/>
                        <ConfirmElement title={t("nationalIdNumber.name")} data={data["nationalIdNumber"]}/>
                        <ConfirmElement title={t("passportExpirationDate.name")} data={data["passportExpirationDate"]}/>
                </div> 
                <button onClick={()=>{
                    onSubmit()
                }} className="mt-10 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>
            </div>
         );
    }else if (data===undefined){
        return (
            <div  className="bg-white h-full p-5 mx-4 sm:mx-0 sm:w-2/3 rounded-md overflow-scroll">
                  <MarhemReg onSubmit={onSubmit}/>
            </div>
        )
    }else {
       return ( 
        <div  className="bg-white p-5 mx-4 sm:mx-0 sm:w-1/2 rounded-md ">
            Loading .....
        </div>
        )
    }
}

export default MahremModal;