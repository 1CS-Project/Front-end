

import { Abril_Fatface } from "next/font/google";
import Locked from "../../common/icons/locked";

const Abril=Abril_Fatface({subsets:["latin"],weight:["400"]})

type props={
    number:string,
    title:string,
    body:string,
    passed?:boolean
}


function CalendarItem({number,title,body,passed=false}:props) {
    return ( 
        <div className="w-[130px] ">
            <div className={passed?"opacity-0":""}>
                <Locked/>
            </div>
            <h1 className={"font-Abril font-normal text-7xl px-5 border-b border-black pb-2 "+(passed?" bg-gradient-to-bl opacity-[0.88] from-[#B49169] via-[#D6B153] via-45% to-[#B49169] inline-block text-transparent bg-clip-text":"text-black/20")}>
                {number}
            </h1>
            <p className="text-sm my-2 font-medium">{title}</p>
            <p className="text-xs font-light">{body}</p>
        </div>
     );
}

export default CalendarItem;