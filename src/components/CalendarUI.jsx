import { useState } from "react";
import { Calendar } from "./ui/calendar";
import ContestList from "./ContestList";
import { useNavigate } from "react-router-dom";

const CalendarUI = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate()

  const handleClick = (selectedDate) => {
      setDate(selectedDate)
      navigate("/contests/"+selectedDate)
  }

  return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleClick}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
      
    
    
  );
}

export default CalendarUI;
