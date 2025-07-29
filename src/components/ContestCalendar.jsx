import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import Popovers from "./Popovers";


const ContestCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [contests, setContests] = useState([]);
  const [events, setEvents] = useState([]);

  console.log(date);

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/contests/platform/all", {
        withCredentials: true,
      });
      setContests(res?.data?.data);
      const formattedObject = res?.data?.data?.
      map((item) => {
        const {
          platform,
          contestType,
          contestEndDate,
          contestSlug,
          contestRegistrationStartDate,
          contestRegistrationEndDate,
          contestName,
          contestDuration,
          contestCode,
          contestStartDate
        } = item;
        return  {
          title: item?.contestName,
          start: item?.contestStartDate,
         
          url: item?.contestUrl,
          extendedProps: {
            contestStartDate,
            platform,
            contestEndDate,
            contestType,
          contestSlug,
          contestRegistrationStartDate,
          contestRegistrationEndDate,
          contestName,
          contestDuration,
          contestCode
          },
        };
      });
      setEvents(formattedObject);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (arg) => {
    setDate(arg.date);
    console.log(arg.date);
    const formatted = arg?.date.toLocaleDateString('en-CA')
    navigate("/contests/" + formatted);
  };
  return (
    <div className="w-full h-full">
      <FullCalendar
        selectable={true}
        select={(info) => {
          console.log("Selected Date Range:", info.startStr, "to", info.endStr);
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(eventInfo) =><Popovers eventInfo={eventInfo}/>
          
          }
        dayCellContent={(arg) => {
          return (
            <div
              className="hover:bg-white text-center  text-blue-50 font-bold w-6 hover:text-black rounded-full bg-blue-400"
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
