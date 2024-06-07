import { isUserWinned } from "@/app/action";
import Examination from "@/components/landing/afterRegistration/examination/examination2";
import { notFound } from "next/navigation";

async function Page() {

    const isWinner=await isUserWinned();
    
    if (!isWinner){
        notFound();
    }
    return ( 
        <div className="px-36 mt-20">
            <Examination/>
        </div>
     );
}

export default Page;