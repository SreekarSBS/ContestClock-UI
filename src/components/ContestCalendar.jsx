import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const events = [
  { title: "LeetCode", date: "2025-08-09", url: "/contest/123" },
  { title: "Codeforces", date: "2025-08-10" },
];


const ContestCalendar = () => {
     const navigate = useNavigate()
     const [date, setDate] = useState(new Date());
     console.log(date);
     
     const handleClick = (arg) => {
        setDate(arg.date)
         console.log(arg.date);
         const formatted = arg?.date.toISOString().split("T")[0];
        navigate("/contests/"+formatted)
     }
  return (
    <div className="w-full h-full">
    <FullCalendar
      selectable = {true}
      select = {(info) => {
        console.log("Selected Date Range:", info.startStr, "to", info.endStr);}}
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={(eventInfo) => (
        <span>
          {eventInfo.event.title} 🚀
        </span>
      )}
      dayCellContent={(arg) => {
        return (
          <div className="hover:bg-white text-center  text-blue-50 font-bold w-6 hover:text-black rounded-full bg-blue-400"
            onClick={() =>handleClick(arg)}
            style={{ cursor: "pointer" }}
          >
            {arg.dayNumberText}
          </div>
        );
      }}
      
      eventClick={(info) => {
        console.log(info);
        
        info.jsEvent.preventDefault();
        // window.location.href = info.event.url;
      }}
    />
    </div>
  );
}

export default ContestCalendar
