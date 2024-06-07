"use client";

import { Flight } from "@/app/action";
import { useState } from "react";

type props={
    aireports:string[],
    data:Flight[]|undefined
}

function Reservation({aireports,data}:props) {
    console.log(data);
    
    const [aireport,setSelctedAireport]=useState(aireports[0]);
    const dates=data?.filter(e=>e.AireportLocatoin===aireport);
    const [selectedTrip,setSelctedTrip]=useState((!dates||dates?.length===0)?undefined:dates[0]);
    return ( 
        <form className="space-y-4">
        <div className="space-y-2">
            <h1>Now choose the aireport you want to take</h1>
            <select onChange={(e)=> setSelctedAireport(e.currentTarget.value)}className="w-full rounded-md"  name="aireport" id="">
                {aireports.map((e)=><option value={e}>{e}</option>)}
            </select>
        </div>
        <div className="space-y-2">
            <h1>Choose a date for this flight </h1>
            <select onChange={(e)=>setSelctedTrip(JSON.parse(e.currentTarget.value))} className="w-full rounded-md"  name="date" id="">
                {dates?.map((e)=>
                    <option value={JSON.stringify(e)}>From {new Date(e.VolStart).toDateString()+" To "+new Date(e.VolEnd).toDateString()}</option>
                )}
            </select>
        </div>
        <div className="space-y-2">
            <h1>What hotel would you like to stay in?</h1>
            <select  className="w-full rounded-md"  name="date" id="">
                {selectedTrip?.ListHotel.split(",").map((e)=>
                <option value={e}>{e}</option>
                
                )}
            </select>
        </div>
        {/* <div className="mx-auto w-fit"> */}
            <button className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright  h-10 px-2 rounded-md text-center">Create your group</button>
        {/* </div> */}

    </form>
     );
}

export default Reservation;