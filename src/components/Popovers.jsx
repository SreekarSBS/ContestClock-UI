import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const optionsTimer = { hour : 'numeric',minute : 'numeric'}

const Popovers = ({eventInfo}) => 
 

<Popover className="relative ">
<PopoverTrigger className="flex  cursor-pointer items-center overflow-x-auto p-1.5  bg-gray-300/60 text-sm   rounded-2xl">

         {eventInfo.event.extendedProps.platform === "codeforces"&& <img  src="https://codolio.com/icons/codeforces.png" width={25} alt = "Platform Logo" />}
          <span className="overflow-hidden font-semibold text-black">{eventInfo.event.extendedProps.contestName} </span>
    
</PopoverTrigger>


  <PopoverContent className="bg-gray-400 border border-cyan-200 animate-out  duration-500">
   
      <div className="text-xl mb-4 text-cyan-100 underline font-stretch-125% underline-offset-4 " >{eventInfo.event.title}</div>
      <div className="flex">
      <img className="m-2 " width="30" height="2" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1"/>
      <span className="text-xl font-stretch-60% my-auto" >{new Date(eventInfo?.event?.extendedProps?.contestStartDate).toLocaleString('en-us',options)}</span>
      </div>
      <div className="flex">
      <img className="m-2 " width="30" height="30" src="https://img.icons8.com/ios/50/present.png" alt="present"/>
      <span className="text-xl  font-stretch-50% my-auto  " >{new Date(eventInfo?.event?.extendedProps?.contestStartDate).toLocaleString('en-us',optionsTimer)}</span>
      </div>
      <div className="flex">
      <img className="m-2" width="30" height="30" src="https://img.icons8.com/ios/50/stopwatch.png" alt="stopwatch"/>
      <span className="text-xl  font-stretch-50% my-auto  " >{ Math.floor(Number(eventInfo?.event?.extendedProps?.contestDuration)/3600) } : {String(Math.floor(Number(eventInfo?.event?.extendedProps?.contestDuration)%3600/60)).padStart(2, "0")} hrs</span>
      </div>
      <div className="flex">
      <img className="m-2" width="30" height="30" src="https://img.icons8.com/ios/50/link--v1.png" alt="link--v1"/>
      <Link to = {eventInfo?.event?.url} className="text-xl underline text-lime-400 font-stretch-50% my-auto  " >Register Now</Link>
    
      </div>
  </PopoverContent>
</Popover>

export default Popovers