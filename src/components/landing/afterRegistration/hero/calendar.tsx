import { getCandidatExaminationStatus, getCandidatPaymentStatus, getTimer, isUserWinned } from "@/app/action";
import CalendarItem from "./calendarItem";
import { NextIntlClientProvider } from "next-intl";

async function Calendar() {
   const hadjRegStart=(await getTimer()).startDate;
   const hadjRegEnd=(await getTimer()).endDate;
   const isWinner=(await isUserWinned())?true:false;
   const examinationStatus=(await getCandidatExaminationStatus());
   let passedExamination=false;
   if (examinationStatus){
      // examinationStatus&&(examinationStatus.gender==="male"?examinationStatus.data?.status==="accepted":examinationStatus.data?.status==="accepted"&&examinationStatus?.dataMahrem?.status==="accepted")
      passedExamination=examinationStatus.data?.status==="accepted";
      if (examinationStatus.gender==="female"){
         passedExamination=passedExamination&&examinationStatus.dataMahrem?.status==="accepted"
      }
   }
   
   const payed=(await getCandidatPaymentStatus());

   let passedPayment=false;
   if (payed){
      // examinationStatus&&(examinationStatus.gender==="male"?examinationStatus.data?.status==="accepted":examinationStatus.data?.status==="accepted"&&examinationStatus?.dataMahrem?.status==="accepted")
      passedPayment=payed.data?.status==="accepted";
      if (payed.gender==="female"){
         passedPayment=passedPayment&&payed.dataMahrem?.status==="accepted"
      }
   }   

   


   
    return ( 
        <div className="flex gap-x-16 justify-center w-full">
            <NextIntlClientProvider>
               <CalendarItem
                  number="01"
                  startDate={hadjRegStart}
                  endDate={hadjRegEnd}
                  started={hadjRegStart?new Date() >=hadjRegStart && new Date() <=hadjRegEnd:false}
                  link="/tirage_reg"
                  title="Wait until we open the registration"
                  body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
               />
               <CalendarItem
                  started={isWinner&&!passedExamination}
                  semiOpen={passedExamination}
                  number="02"
                  link="/examination"
                  title="Go to medical"
                  body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
               />
               <CalendarItem
                  number="03"
                  started={passedExamination&&!passedPayment}
                  semiOpen={passedPayment}
                  link="/payment"
                  title="Pay your bills"
                  body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that "
               />
               <CalendarItem
                  started={passedPayment}
                  number="04"
                  link="/reserv"
                  title="Reservation"
                  body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
               />
            </NextIntlClientProvider>
        </div>
     );
}

export default Calendar;