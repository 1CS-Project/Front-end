import { getTimer } from "@/app/action";
import CalendarItem from "./calendarItem";
import { NextIntlClientProvider } from "next-intl";

async function Calendar() {
   const hadjRegStart=(await getTimer()).startDate;

   
    return ( 
        <div className="flex gap-x-16 justify-center w-full">
            <NextIntlClientProvider>
               <CalendarItem
                  number="01"
                  startDate={hadjRegStart}
                  link="/tirage_reg"
                  title="Wait until we open the registration"
                  body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
               />
               <CalendarItem
                  number="02"
                  link="/medical"
                  title="Go to medical"
                  body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
               />
               <CalendarItem
                  number="03"
                  link="/payment"
                  title="Pay your bills"
                  body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that "
               />
               <CalendarItem
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