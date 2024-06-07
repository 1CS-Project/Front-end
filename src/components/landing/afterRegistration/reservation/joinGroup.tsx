"use client"

import { ClientFlight } from "@/app/action";
import { chooseVol } from "@/app/mutations";
import { useRouter } from "next/navigation";

type props={
    group:ClientFlight,
    token:string
}

function JoinGroup({group,token}:props) {
    const router=useRouter();
    return ( 
    <div>
        <h1 className="text-xl font-medium">Group details:</h1>
        <div className="p-4">
                <h1 className="text-lg"> <span className="font-medium">Aireport:</span> {group.aireport}</h1>
                <h1 className="text-lg"> <span className="font-medium">From:</span> {new Date(group.volStart).toDateString()}</h1>
                <h1 className="text-lg"> <span className="font-medium">To:</span> {new Date(group.volEnd).toDateString()}</h1>
                <h1 className="text-lg"> <span className="font-medium">Hotel:</span> {group.hotel}</h1>
         </div>
        <button onClick={async ()=>{
            const {aireport,volStart,volEnd,hotel,code}=group;
            await chooseVol(token,{aireport,hotel,code,volStart:volStart.slice(0,10),volEnd:volEnd.slice(0,10)});
            router.refresh();
        }} className="text-white px-8 font-medium bg-gradient-to-r from-buttonleft to-buttonright  h-10  rounded-md text-center">Join</button>
         
    </div>
     );
}

export default JoinGroup;