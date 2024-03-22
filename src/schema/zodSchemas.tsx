import { z } from "zod";



export const TirageRegSchemaF=(t:(arg:string)=>string)=> z.object({
    firstname:z.string().trim().min(1,t("firstName.error")),
    lastname:z.string().trim().min(1,t("lastName.error")),
    phoneNumber:z.string().regex(/\+213\d{9}/,t("phone.error")),
    birthCerteficateNumber:z.string().regex(/\d{5}/,t("birthCert.error")),
    city:z.string().trim().min(1,t("city.error")),
    state:z.string().trim().min(1,t("state.error")),
    nationalIdNumber:z.string().regex(/\d{9}/,t("passport.error")),
    passportExpirationDate:z.string().regex(/^\d\d\d\d-\d\d-\d\d$/,t("passportExpire.error")), //yyyy-mm-dd
    dateOfBirth:z.string().regex(/^\d\d\d\d-\d\d-\d\d$/,t("birthdate.error")),
    // imageUrl:z.string().url(),
    imageUrl:z.string().optional(),

    gender:z.enum(["male","female"],{required_error:t('gender.error'),invalid_type_error:t('gender.error')}),
    mahremNationalIdNumber:z.string().regex(/\d{9}/).optional().or(z.literal("")),
    mahremRelation:z.enum(["husband","brother","father","son"],{required_error:t('relationMahrem.error'),invalid_type_error:t('relationMahrem.error')}).optional(),
})
.refine((input)=>{
    
    if (input.gender==="female"&&(input.mahremNationalIdNumber===""||input.mahremNationalIdNumber===undefined)){
        return false
    }

    return true;
},{
    message:"mahrem is required",
    path:["mahremNationalIdNumber"]
})
// .transform((input)=>{
//     // if (input.gender==="male"&&input.mahremNationalIdNumber&&input.mahremRelation&&(input.mahremNationalIdNumber.length>0||input.mahremRelation.length>0)){
//         return {...input,mahremRelation:"d",mahremNationalIdNumber:"d"}
//     // }
//     // return input
// })


export type tirageRegT=z.infer<ReturnType<typeof TirageRegSchemaF>>

// export type tirageRegT=z.infer<typeof TirageRegSchema>
