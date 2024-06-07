import { getCandidatExaminationStatus, getCandidatPaymentStatus } from "@/app/action";
import Payment from "@/components/landing/afterRegistration/payment/payment";
import { notFound } from "next/navigation";

async function Page() {
    const examinationStatus=(await getCandidatExaminationStatus());
    let passedExamination=false;
    if (examinationStatus){
       // examinationStatus&&(examinationStatus.gender==="male"?examinationStatus.data?.status==="accepted":examinationStatus.data?.status==="accepted"&&examinationStatus?.dataMahrem?.status==="accepted")
       passedExamination=examinationStatus.data?.status==="accepted";
       if (examinationStatus.gender==="female"){
          passedExamination=passedExamination&&examinationStatus.dataMahrem?.status==="accepted"
       }
    }
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