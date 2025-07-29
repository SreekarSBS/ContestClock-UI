import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DayContests = () => {
  const [contests,setContests] = useState()
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
      console.log(err);
    }
    }
    
  return (
    <div>
      <div className="m-12 text-3xl sm:text-4xl md:text-5xl "> {formattedDate}</div>
     
        {
          contests?.map((item) => {
            return <div key = {item._id}>
                {item?.contestName}
              </div>
          })
        }
     
    </div>
  )
}

export default DayContests
