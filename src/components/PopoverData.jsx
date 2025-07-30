import React from 'react'
import { Link } from "react-router-dom";
import AddCalendar from "./AddCalendar";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const optionsTimer = { hour : 'numeric',minute : 'numeric'} 

const PopoverData = ({eventInfo}) => {
  return (<>
    <div className="text-xl mb-4  underline font-stretch-125% underline-offset-4 " >{eventInfo?.event?.title}</div>
      <div className="flex">
      <img className="m-2" width="34" height="30" src="https://img.icons8.com/badges/48/calendar.png" alt="calendar"/>
      <span className="text-xl font-stretch-60% my-auto" >{new Date(eventInfo?.event?.extendedProps?.contestStartDate).toLocaleString('en-us',options)}</span>
      </div>
      <div className="flex">
      <svg className="m-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="30" viewBox="0 0 48 48">
<circle cx="24" cy="25" r="20"></circle><circle cx="24" cy="23" r="19" fill="#fff"></circle><path d="M24,43C12.972,43,4,34.028,4,23S12.972,3,24,3s20,8.972,20,20S35.028,43,24,43z M24,5C14.075,5,6,13.075,6,23	s8.075,18,18,18s18-8.075,18-18S33.925,5,24,5z"></path><circle cx="24" cy="23" r="2"></circle><circle cx="24" cy="9" r="1"></circle><circle cx="24" cy="37" r="1"></circle><circle cx="38" cy="23" r="1"></circle><circle cx="10" cy="24" r="1"></circle><path d="M33.707,13.293c-0.391-0.391-1.023-0.391-1.414,0l-9,9c-0.391,0.391-0.391,1.023,0,1.414l5,5C28.488,28.902,28.744,29,29,29	s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L25.414,23l8.293-8.293C34.098,14.316,34.098,13.684,33.707,13.293z"></path>
</svg>
      <span className="text-xl  font-stretch-50% my-auto  " >{new Date(eventInfo?.event?.extendedProps?.contestStartDate).toLocaleString('en-us',optionsTimer)}</span>
      </div>
      <div className="flex">
      <img className="m-2" width="34" height="30" src="https://img.icons8.com/badges/48/stopwatch.png" alt="stopwatch"/>
      <span className="text-xl  font-stretch-50% my-auto  " >{ Math.floor(Number(eventInfo?.event?.extendedProps?.contestDuration)/3600) } : {String(Math.floor(Number(eventInfo?.event?.extendedProps?.contestDuration)%3600/60)).padStart(2, "0")} hrs</span>
      </div>
      <div className="flex ">
     
      {
          new Date(eventInfo?.event?.extendedProps?.contestEndDate) >= new Date() ?
      <> <img className="m-2" width="30" height="30" src="https://img.icons8.com/ios/50/link--v1.png" alt="link--v1"/>
      <Link target="_blank" to = {eventInfo?.event?.url} className="text-xl underline text-lime-400 font-stretch-50% my-auto  " >Register Now</Link></>
      :<>
      <img width="30" height="30" className="m-2" src="https://img.icons8.com/color/48/spam.png" alt="spam"/>
      <Link target="_blank" to = {eventInfo?.event?.url} className="text-xl underline text-amber-400 font-stretch-50% my-auto  " >Contest Ended</Link></>
      }
     
      </div>
      <span className="flex">
      <img className="m-2" width="33" height="48" src="https://img.icons8.com/badges/48/calendar-plus.png" alt="calendar-plus"/>
       <AddCalendar eventInfo = {eventInfo} item = {null} /></span>
  </>)
}

export default PopoverData
