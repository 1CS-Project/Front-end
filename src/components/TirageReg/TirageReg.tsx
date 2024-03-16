"use client";


import { TirageRegSchema, tirageRegT } from "@/schema/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import InputText from "./inputText";
import InputOption from "./inputOption";
import ImagePlaceholder from "../landing/common/icons/image_placeholder";

type FieldValues = {
    [x: string]: any;
}


function TirageReg() {

    

    const {register,handleSubmit,getValues,formState:{errors}} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema)})

    // const submit:SubmitHandler<any>=(data)=>console.log(data);
    
    return ( 
        <div>
            <h1 className="px-10 flex items-center gap-x-4">
                <span className={"font-Abril text-7xl px-5 border-b border-black pb-2"}>01</span>
                <span className={"font-Open text-4xl font-medium"}>Register</span>
            </h1>
            <div className="mt-10 w-full">
                <form onSubmit={handleSubmit((e)=>{
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
                        <InputOption  field="gender" label="Gender"  register={register} error={errors.gender?.message} />
                        <div className="pt-5 flex">
                            <ImagePlaceholder/>
                            <div>
                                <h1>Upload square image, size less than 100KB</h1>
                                <input type="file" name="" id="" />
                            </div>
                        </div>
                    </div>

                    <button className="mt-[200px]" type="submit">submit</button>
                </form>
                
            </div>
        </div>
     );
}

export default TirageReg;