import { getCandidatExaminationStatus, getCandidatPaymentStatus } from "@/app/action";
import Payment from "@/components/landing/afterRegistration/payment/payment";
import { notFound } from "next/navigation";

async function Page() {
   const passedExamination=(await getCandidatExaminationStatus())?.status==="accepted";

   if (!passedExamination){
    notFound();
   }
    return ( 
        <div className="px-36 mt-20">
            <Payment/>
        </div>
     );
}

export default Page;