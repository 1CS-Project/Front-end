import { z } from "zod";



export const TirageReg=z.object({
    first_name:z.string(),
    last_name:z.string(),
    phone:z.number().
})