"use client";

import { getTimer } from "@/app/action";
import Timer from "../../common/timer";
import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

type props={
    startDate?:Date,
    endDate?:Date,
    hadjStart?:Date,
    baladiaDidTirage:boolean,
    isWinner:boolean
}



function ATimer({startDate,endDate,hadjStart,baladiaDidTirage,isWinner}:props) {

    const locale=useLocale()
    // let [regTime,setRegTime]=useState(startDate?new Date() > startDate : false);
    const currentTime=new Date();
    const hadjStarted=hadjStart?currentTime>hadjStart:false;
    const regStillNot=startDate?currentTime<startDate:false;
    const regStart=(startDate!==undefined&&endDate!==undefined)?(currentTime>=startDate)&&(currentTime<=endDate):false;
    
    return ( 
        <div className="mt-6 flex items-center justify-center gap-x-10">
            {hadjStarted?
             <h1>
                Hadj is done for this year
             </h1>
            :
             regStillNot?
            <>
                <h1 className="text-lg">Still</h1>
                <Timer startDate={startDate!} darkMode/>
                <h1 className="text-lg">To the registration</h1>
            </>
            :regStart?
            <Link href={locale+"/tirage_reg"}  className="mt-8  px-20 text-xl py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright ">Register now</Link>
            :!baladiaDidTirage?
            <>
                <h1>Your baladia still didn't do Tirage</h1>
            </>
            :isWinner?
            <>
                <h1 className="text-lg font-medium">
                    Congratulation you are a winner
                </h1>
            </>
            :
            <>
                <h1 className="text-lg font-medium">
                    Best Luck next year
                </h1>
            </>

        }
        </div>
     );
}

export default ATimer;