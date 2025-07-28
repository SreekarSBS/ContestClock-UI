import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

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
        } = item;
        return  {
          title: item?.contestName,
          start: item?.contestStartDate,
         
          url: item?.contestUrl,
          extendedProps: {
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
    const formatted = arg?.date.toISOString().split("T")[0];
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
        eventContent={(eventInfo) =><div className="flex items-center overflow-x-auto p-1.5  bg-gray-300/60 text-sm  rounded-2xl"> 
         {eventInfo.event.extendedProps.platform === "codeforces"&& <img  src="https://codolio.com/icons/codeforces.png" width={25} alt = "Platform Logo" />}
          <span className="overflow-hidden font-semibold text-black">{eventInfo.event.extendedProps.contestName} </span>
          </div>
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
           window.location.href = info.event.url;
        }}
      />
    </div>
  );
};

export default ContestCalendar;
