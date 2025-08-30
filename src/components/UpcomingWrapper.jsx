import React from 'react'
import AddCalendar from "./AddCalendar";
import { AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  import GFG_ICON from "../assets/geeksForGeeks.svg"
  import CODE_FORCES_ICON from "../assets/code-forces.svg"
  import CODE_CHEF_ICON from "../assets/codeChef.svg"
  import LEETCODE_ICON from "../assets/leetcode-96.png"
  import ALARM_ICON from "../assets/icons8-alarm-64.png"
  import BELL_ICON from "../assets/bell.svg"
  import CALENDAR_ICON from "../assets/icons8-calendar-48.png"
  import START_TIME_ICON from "../assets/startTime.svg"
  import STOPWATCH_ICON from "../assets/icons8-stopwatch-48.png"

import { Link } from 'react-router-dom';
const UpcomingWrapper = ({item,savedContests,index,handleDeleteContest,handleRemindClick,options,optionsTimer}) => {
  return (
    <AccordionItem value={`item-${index}`}>
                    
            <div key={item?._id} className="flex  text-sm sm:text-lg md:text-lg m-6 p-2 border-2  border-gray-400 rounded-2xl  ">
                
                {item?.platform === "geeksforgeeks" && <img className='mb-auto w-14 m-1' src={GFG_ICON} alt="geeks-for-geeks-logo" /> }
               {item?.platform === "codeforces" && <img className='mb-auto m-2' src={CODE_FORCES_ICON} alt="external-codeforces-programming-competitions-and-contests-programming-community-logo-shadow-tal-revivo"/>
              } { item?.platform === "codechef" &&  <img className='w-20 mb-auto' src={CODE_CHEF_ICON} alt="code-chef-svg" /> }
                {
                    item?.platform === "leetcode" && <img className='max-h-18 m-0.5 ' width="66" height="36" src={LEETCODE_ICON}/>  }
                  {
                    item?.platform === "atcoder" && <img className='max-h-14 m-1.5' width="58" height="36" src="https://codolio.com/icons/atcoder_dark.png"/>  }
        
               <div className='w-full'>
               <AccordionTrigger> 
                <div className='cursor-pointer md:text-lg xl:text-xl 2xl:text-2xl flex  w-full font-light text-sky-400'><div className='w-full lg:w-1/2 '>{item?.contestName}</div>
                <div className="lg:w-1/2 lg:justify-end flex flex-col items-center justify-between  lg:flex-row">
                    <Link target='_blank' to = {item?.contestUrl} className='cursor-pointer hover:text-white bg-gradient-to-l from-blue-400 to-cyan-500 text-black  p-1.5 md:p-2   m-2 rounded-2xl'>Register</Link>
                   {  savedContests?.some(contest => contest._id === item?._id)  ?  <div onClick={() => handleDeleteContest(item?._id)} className='cursor-pointer hover:text-black hover:bg-gradient-to-bl from-green-600 to-emerald-500 p-1.5 m-2 md:p-2 border border-blue-400  rounded-2xl'>
                      <img width="40" height="34" src={ALARM_ICON} alt="alarm"/> 
                    
                   
                    </div>
                    :
                    <div onClick={() => handleRemindClick(item?._id)} className='cursor-pointer hover:text-black hover:bg-gradient-to-bl from-green-600 to-emerald-500 p-1.5 m-2 md:p-2 border border-blue-400  rounded-2xl'>
                      
                    <img src={BELL_ICON} alt="reminder-bell" />
                   
                    </div>
        }


                    
                </div>
                </div>
                </AccordionTrigger>
                <AccordionContent>
                <div className='flex  flex-col lg:flex-row xl:flex-col 2xl:flex-row justify-between '>
                <div>
               
                 <div className="flex">
  <img className="m-2 h-7 md:h-8" width="34" height="30" src= {CALENDAR_ICON}alt="calendar"/>
  <span className=" md:text-xl font-stretch-60% my-auto" >{new Date(item.contestStartDate).toLocaleString('en-us',options)}</span>
  </div>
  <div className="flex">
  <img className='m-2' src={START_TIME_ICON} alt="contest-start-time" />
  <span className="md:text-xl  font-stretch-50% my-auto  " >{new Date(item?.contestStartDate).toLocaleString('en-us',optionsTimer)}</span>
  </div>
  </div>
  <div>
  <span className="flex ">
 
 <AddCalendar item = {item}/></span>
  <div className="flex">
  <img className="md:m-2 h-7 w-6 m-3 md:w-8  md:h-8" width="34" height="30" src={STOPWATCH_ICON} alt="stopwatch"/>
  
  <span className="md:text-xl  font-stretch-50% my-auto  " >{ Math.floor(Number(item?.contestDuration)/3600) } : {String(Math.floor(Number(item?.contestDuration)%3600/60)).padStart(2, "0")} hrs</span>
  </div>
 
  </div>
                </div>
                </AccordionContent>
                </div>
                
            </div>
            </AccordionItem>
  )
}

export default UpcomingWrapper
