"use client";

import { Flight } from "@/app/action";
import { chooseVol } from "@/app/mutations";
import { useRouter } from "next/navigation";
import { useState } from "react";

type props={
    aireports:string[],
    data:Flight[]|undefined,
    token:string
}

function Reservation({aireports,data,token}:props) {
    
    const router=useRouter();
    const [aireport,setSelctedAireport]=useState(aireports[0]);
    const dates=data?.filter(e=>e.AireportLocatoin===aireport);
    const [selectedTrip,setSelctedTrip]=useState((!dates||dates?.length===0)?undefined:dates[0]);
    return ( 
        <form onSubmit={async (e)=>{
            e.preventDefault();
            const formData=new FormData(e.currentTarget);

            const aireport=selectedTrip?.AireportLocatoin!;
            const volStart=selectedTrip?.VolStart!;
            const volEnd=selectedTrip?.VolEnd!;
            const hotel=formData.get("hotel") as string


            const result=await chooseVol(token,{aireport,volStart,volEnd,hotel});
            router.refresh();
        }} className="space-y-4">
        <div className="space-y-2">
            <h1>Now choose the aireport you want to take</h1>
            <select onChange={(e)=> setSelctedAireport(e.currentTarget.value)}className="w-full rounded-md"  name="aireport" id="">
                {aireports.map((e)=><option key={e} value={e}>{e}</option>)}
            </select>
        </div>
        <div className="space-y-2">
            <h1>Choose a date for this flight </h1>
            <select onChange={(e)=>setSelctedTrip(JSON.parse(e.currentTarget.value))} className="w-full rounded-md"  name="date" id="">
                {dates?.map((e)=>
                    <option key={e.id} value={JSON.stringify(e)}>From {new Date(e.VolStart).toDateString()+" To "+new Date(e.VolEnd).toDateString()}</option>
                )}
            </select>
        </div>
        <div className="space-y-2">
            <h1>What hotel would you like to stay in?</h1>
            <select  className="w-full rounded-md"  name="hotel" id="">
                {selectedTrip?.ListHotel.split(",").map((e)=>
                <option key={e} value={e}>{e}</option>
                
                )}
            </select>
        </div>
        {/* <div className="mx-auto w-fit"> */}
            <button disabled={!data} className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright  h-10 px-2 rounded-md text-center">Create your group</button>
        {/* </div> */}

    </form>
     );
}

export default Reservation;