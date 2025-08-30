import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardsContest from './CardsContest'
import Alert from '@mui/material/Alert';




const DayContests = () => {
  const [contests,setContests] = useState([])
  useEffect(() => {
    fetchDayContests()
   },[])

  const {date} = useParams()
  const newDate = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = newDate.toLocaleString('en-us',options)
 
    const fetchDayContests = async() => {
      try {
     const res = await axios.get(BASE_URL + "/contests/day/"+date,{
      withCredentials : true
     })
     
     setContests(res?.data?.data)
     
    }catch(err){
      // console.log(err);
    }
    }
    let msg;
      if(newDate > new Date()) msg = "No Contests Scheduled on " + formattedDate;
      else if(newDate < new Date) msg = "No Contests were Conducted on " + formattedDate 
      else msg = "No Contests for Today! Keep Practicing " 
  
      
       
    
  return contests.length > 0 ? (
    <div>
      <div className="m-12 text-3xl sm:text-4xl md:text-5xl text-lime-300 font-extralight "> {formattedDate}</div>
     
        {
          contests?.map((item) => {
            return <ul key={item._id} className="list w-[80%] mx-auto my-4 rounded-3xl border-l-red-400 border-l-4 border-b-4 border-b-red-500 bg-base-100  shadow-md">
  
               <CardsContest item = {item} />
              </ul>
          })
        }
     
    </div>
  ) : 
  <>
  <div className="w-1/2 mx-auto mt-32 sm:mt-96 ">
  <Alert variant="filled" severity="info">
  <p className='text-2xl font-extralight'>{msg}</p>
 </Alert>
 </div>
 </>
}

export default DayContests
