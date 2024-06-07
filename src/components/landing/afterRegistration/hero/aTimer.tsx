"use client";

import { getTimer } from "@/app/action";
import Timer from "../../common/timer";
import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

type props={
    startDate?:Date,
}



function ATimer({startDate}:props) {

    const locale=useLocale()
    let [regTime,setRegTime]=useState(startDate?new Date() > startDate : false);

    return ( 
        <div className="mt-6 flex items-center justify-center gap-x-10">
            {regTime?
                <Link href={locale+"/tirage_reg"}  className="mt-8  px-20 text-xl py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright ">Register now</Link>
            :
            <>
                <h1 className="text-lg">Still</h1>
                <Timer darkMode/>
                <h1 className="text-lg">To the registration</h1>
            </>
        }
        </div>
     );
}

export default ATimer;