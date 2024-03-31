import { Path, UseFormRegister } from "react-hook-form";
import { authType } from "./signup";


type props={
        register:UseFormRegister<authType>
        error?:string,
        type?:"tel"|"text"|"email"|"password"
        label:string,
        placeholder?:string,
        field:Path<authType>
}





function FormInput({register,label,field,type,placeholder,error}:props) {
    return ( 
      <div className="w-full flex flex-col mb-1">
        <div className="flex gap-x-2 items-center mb-1">
           <p className="font-medium text-[0.9em] ">{label}</p>
           <h1 className="text-[#E64040] text-sm">{error}</h1>
        </div>
        <input {...register(field)} type={type} placeholder={placeholder} className="w-full text-black bg-transparent px-4 py-2 mb-2 border border-[#d1d5db] rounded-md bg-[#f9fafb]" required />
      </div>
     );
}

export default FormInput;