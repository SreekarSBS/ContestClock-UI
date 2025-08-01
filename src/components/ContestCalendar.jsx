import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

import Popovers from "./Popovers";



const ContestCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const location = useLocation()
  const context = useOutletContext()
  const events = context[2]
  const savedEvents = context[3]
  console.log(date);



  const handleClick = (arg) => {
    setDate(arg.date);
    console.log(arg.date);
    const formatted = arg?.date.toLocaleDateString('en-CA')
    navigate("/contests/" + formatted);
  };
  return (
    <div className={`w-full h-full ${location.pathname === "/contest" ? "p-8" : "p-0"}`}>
      {location.pathname === "/contest" && <div className="mt-12  underline underline-offset-8 text-center text-3xl sm:text-4xl md:text-5xl text-lime-300 font-extralight "> Scheduled Contests</div>}
      <FullCalendar
        selectable={true}
        select={(info) => {
          console.log("Selected Date Range:", info.startStr, "to", info.endStr);
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={location.pathname === "/" && events || location.pathname === "/contest" && savedEvents}
        eventContent={(eventInfo) =><Popovers eventInfo={eventInfo}/>
          
          }
        dayCellContent={(arg) => {
          return (
            <div
              className={`hover:bg-white text-center ${new Date(arg.date).toDateString() === new Date().toDateString() ? "bg-green-700" : " bg-blue-400"} text-blue-50 font-bold w-6 hover:text-black rounded-full`}
              onClick={() => handleClick(arg)}
              style={{ cursor: "pointer" }}
            >
              {arg.dayNumberText}
            </div>
          );
        }}
        eventClick={(info) => {
          console.log(info);
          
          info.jsEvent.preventDefault();
          //  window.open(info.event.url);
        }}
      />
    </div>
  );
};

export default ContestCalendar;
