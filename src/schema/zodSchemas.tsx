import { z } from "zod";


export const TirageRegSchema=z.object({
    firstname:z.string().trim().min(1,{message:"First name is required"}),
    lastname:z.string().trim().min(1,{message:"Last name is required"}),
    phoneNumber:z.string().regex(/\+213\d{9}/,{message:"Phone number must start with +213"}),
    birthCerteficateNumber:z.string().regex(/\d{5}/,{message:"certeficate number length must be 5"}),
    city:z.string().trim(),
    state:z.string().trim(),
    nationalIdNumber:z.string().regex(/\d{9}/),
    passportExpirationDate:z.string(),
    dateOfBirth:z.string(),
    imageUrl:z.string().url(),
    gender:z.enum(["male","female"])
})

export type tirageRegT=z.infer<typeof TirageRegSchema>
