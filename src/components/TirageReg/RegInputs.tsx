import { FieldErrors, UseFormRegister } from "react-hook-form";
import InputFile from "./input/inputFile";
import InputOption from "./input/inputOption";
import InputText from "./input/inputText";
import { tirageRegT } from "@/schema/zodSchemas";


type props={
    register:UseFormRegister<tirageRegT>,
    errors:FieldErrors<tirageRegT>
}


function RegInputs({register,errors}:props) {
    return ( 
        <>
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
        </>
     );
}

export default RegInputs;