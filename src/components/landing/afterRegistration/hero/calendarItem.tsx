

import { Abril_Fatface } from "next/font/google";

const Abril=Abril_Fatface({subsets:["latin"],weight:["400"]})

type props={
    number:string,
    title:string,
    body:string
}


function CalendarItem({number,title,body}:props) {
    return ( 
        <div className="w-[130px] ">
            <h1 className={Abril.className+" text-7xl px-5 border-b border-black pb-2"}>
                {number}
            </h1>
            <p className="text-sm my-2 font-medium">{title}</p>
            <p className="text-xs font-light">{body}</p>
        </div>
     );
}

export default CalendarItem;