import { getClientVol, getToken, getVols } from "@/app/action";
import Reservation from "@/components/landing/afterRegistration/reservation/reservation";
import Image from "next/image";

async function Page() {
    const k=await getVols();
    // console.log(k);
    
    const preAiro=k?.map(e=>e.AireportLocatoin);
    let s = new Set(preAiro);
    let it = s.values();
    const aireports= Array.from(it);
    const token=await getToken();

    const volData=await getClientVol();
    
    if (!volData){
        return ( 
            <Reservation token={token!} data={k} aireports={aireports}/>
         );
    }

    return (
        <div className="w-full">
            <div>
                <h1 className="text-3xl text-center font-semibold">Your code: </h1>
                <h1 className="text-lg text-center mt-4">{volData.code}</h1>
                <h1 className="text-center mt-2">Share it with the ones you wish to join you in the trip</h1>
            </div>

            <div className="mt-8">
                <h1 className="text-xl font-medium ">Your information:</h1>
                <div className="p-4">
                    <h1 className="text-lg"> <span className="font-medium">Aireport:</span> {volData.aireport}</h1>
                    <h1 className="text-lg"> <span className="font-medium">From:</span> {new Date(volData.volStart).toDateString()}</h1>
                    <h1 className="text-lg"> <span className="font-medium">To:</span> {new Date(volData.volEnd).toDateString()}</h1>
                    <h1 className="text-lg"> <span className="font-medium">Hotel:</span> {volData.hotel}</h1>

                </div>

            </div>
        </div>
    )
}

export default Page;