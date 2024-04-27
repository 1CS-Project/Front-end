import CalendarItem from "./calendarItem";

function Calendar() {
    return ( 
        <div className="flex gap-x-16 justify-center w-full">
            <CalendarItem
               number="01"
               passed
               title="Wait until we open the registration"
               body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
            />
            <CalendarItem
               number="02"
               title="Go to medical"
               body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
            />
            <CalendarItem
               number="03"
               title="Pay your bills"
               body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that "
            />
            <CalendarItem
               number="04"
               title="Reservation"
               body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
            />
        </div>
     );
}

export default Calendar;