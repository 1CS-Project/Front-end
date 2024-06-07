"use client"

import { Abril_Fatface } from "next/font/google";
import Locked from "../../common/icons/locked";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const Abril=Abril_Fatface({subsets:["latin"],weight:["400"]})

type props={
    number:string,
    title:string,
    body:string,
    startDate?:Date
    link:string,
}


function CalendarItem({number,title,body,link,startDate}:props) {
    const local=useLocale();
    const [passed,setPassed]=useState(startDate?new Date() >startDate:false);

    useEffect(()=>{
        let interval:NodeJS.Timeout;
        if (startDate){
            interval=setInterval(()=>{
                if (new Date()>startDate){
                    setPassed(true);
                    clearInterval(interval);
                }
            },1000)
        }
        return ()=>clearInterval(interval)
    },[])
    
    
    return ( 
        <Link href={local+link} className={`w-[130px] ${passed?"":"pointer-events-none"}`}>
            <div className={passed?"opacity-0":""}>
                <Locked/>
            </div>
            <h1 className={"font-Abril font-normal text-7xl px-5 border-b border-black pb-2 "+(passed?" bg-gradient-to-bl opacity-[0.88] from-[#B49169] via-[#D6B153] via-45% to-[#B49169] inline-block text-transparent bg-clip-text":"text-black/20 pointer-events-none")}>
                {number}
            </h1>
            <p className="text-sm my-2 font-medium">{title}</p>
            <p className="text-xs font-light">{body}</p>
        </Link>
     );
}

export default CalendarItem;