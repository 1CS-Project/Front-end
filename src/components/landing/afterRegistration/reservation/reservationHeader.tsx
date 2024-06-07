"use client";

import Link from "next/link";
import { useState } from "react";

function ReservationHeader() {

    const [group,setGroup]=useState("");

    return ( 
        <div className="h-fit text-center">
            <h1 className="py-1 text-lg font-medium ">Join group</h1>
            <input onChange={(e)=>{
                setGroup(e.currentTarget.value)
            }}  className="h-10 rounded-l-xl" type="text" name="" id="" />
            <Link href={"./reservation/"+group} className="text-white py-3 font-medium bg-gradient-to-r from-buttonleft to-buttonright  px-2 rounded-r-full">Join</Link>
        </div>
     );
}

export default ReservationHeader;