import { SubmitHandler, useForm } from "react-hook-form";
import RegInputs from "../RegInputs";
import InputFile from "../input/inputFile";
import InputText from "../input/inputText";
import { TirageRegSchemaF, tirageRegT } from "@/schema/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";


type props={
    onSubmit:(v?:boolean,data?:Record<string,any>)=>void,

}


function MarhemReg({onSubmit}:props) {
    
    const t= useTranslations("tirageForm")
    const TirageRegSchema=TirageRegSchemaF(t);
    const {register,handleSubmit,formState:{errors}} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema),shouldUnregister:true,defaultValues:{
        birthCerteficateNumber: "55555",
        city: "ddd",
        dateOfBirth: "2004-03-25",
        firstname: "ddd",
        gender: "male",
        lastname: "55",
        nationalIdNumber: "123456789123456789",
        passportNumber:"123456789",
        passportExpirationDate: "2025-03-12",
        phoneNumber: "+213959595959",
        imageUrl:"http://localhost:3000/en/tirage_reg",
        state: "dd"
}})
    console.log(errors);
    const submitHandle:SubmitHandler<tirageRegT>=async (d,e)=>{
        e?.preventDefault()
        console.log(d);
        
    }
    
    return ( 
        <>
            <h1 className="text-xl font-medium pb-2">Please add your mahrem details</h1>
            <form id="form3" onSubmit={handleSubmit(submitHandle,(e)=>{
                console.log(e);
                
            })}>
                <div  className="flex gap-x-[2%] gap-y-3 flex-wrap overflow-scroll">

                    <InputText field="firstname" label="First name" placeholder="Enter your first name" register={register} error={errors.firstname?.message} />
                    <InputText field="lastname" label="Last name" placeholder="Enter your last name" register={register} error={errors.lastname?.message} />
                    <InputText field="phoneNumber" label="Phone number" placeholder="Enter your phone number" register={register} error={errors.phoneNumber?.message} />
                    <InputText field="birthCerteficateNumber" label="Birth certificate number" placeholder="Enter your Birth certificate number" register={register} error={errors.birthCerteficateNumber?.message} />
                    <InputText field="city" label="City" placeholder="Enter your city" register={register} error={errors.city?.message} />
                    <InputText field="state" label="State" placeholder="Enter your state" register={register} error={errors.state?.message} />
                    <InputText field="nationalIdNumber" label="National identification number " placeholder="Enter your id number" register={register} error={errors.nationalIdNumber?.message} />
                    <InputText field="passportNumber" label="Passport Number" placeholder="Enter your passport number"  register={register} error={errors.passportNumber?.message}  />
                    <InputText field="passportExpirationDate" label="Expiration date"  register={register} error={errors.passportExpirationDate?.message}  type="date"/>
                    <InputText field="dateOfBirth" label="Birth date"  register={register} error={errors.dateOfBirth?.message}  type="date"/>
                    <div className="block w-full">
                        <InputFile/>
                    </div>
                    <button form="" className="mt-2 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>

                </div>
            </form>
        </>
     );
}

export default MarhemReg;