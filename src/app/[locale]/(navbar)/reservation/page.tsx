import { getVols } from "@/app/action";
import Reservation from "@/components/landing/afterRegistration/reservation/reservation";
import Image from "next/image";

async function Page() {
    const k=await getVols();
    // console.log(k);
    
    const preAiro=k?.map(e=>e.AireportLocatoin);
    let s = new Set(preAiro);
    let it = s.values();
    const aireports= Array.from(it);
    
    return ( 
        <Reservation data={k} aireports={aireports}/>
     );
}

export default Page;