import { z } from "zod";


export const TirageRegSchema=z.object({
    first_name:z.string({required_error:"first name required"}),
    last_name:z.string(),
    phone:z.string().regex(/\d{9}/).transform((val)=>"+213"+val),
    birthCert_num:z.string().regex(/\d{5}/),
    city:z.string(),
    state:z.string(),
    passport_number:z.string().regex(/\d{9}/),
    expire_date:z.date(),
    birth_date:z.date(),
    image:z.string().url(),
    gender:z.enum(["male","female"])
})

export type tirageRegT=z.infer<typeof TirageRegSchema>
