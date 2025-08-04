import React, { useEffect, useState } from 'react'
import ShimmerList from './Shimmer/ShimmerList';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

import {  useOutletContext } from 'react-router-dom';
// import { Link } from "react-router-dom";



import FilterContests from './FilterContests';
import UpcomingContests from './UpcomingContests';




const ContestList = () => {
    
    const [contests,setContests] = useState([]);
    
     
    const context = useOutletContext()
    const visibleContests = context[0];
    
    
   //j
    useEffect(() => {
        fetchContests()
    },[visibleContests])
   

    const fetchContests = async() => {
        try {
        
        const res = await axios.get(BASE_URL+`/contests/platform?platforms=${visibleContests.join(",")}&startDate=`+ new Date().toISOString() ,{
            withCredentials : true
        })
        console.log(res);
        
        setContests(res?.data?.data)
        
        
        }catch(err){
            console.log(err);
        }
    }
    

  

    
  return  (
    
    <div className='flex-col w-full h-screen overflow-x-hidden'>
        <div className="flex font-extralight  text-3xl md:text-4xl mx-8">
        Upcoming Contests
        
        </div>
      
        <FilterContests />
        {(!contests) && <ShimmerList />}
        {(contests?.length === 0) ? <div className='mt-14 text-center text-2xl font-semibold'>
        Looks Like there are no upcoming contests for the selected platforms. Please select other platforms or try again later.
        <div className='flex justify-center items-center mt-4'>
        <img className='max-h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEuIkq_hfB3x7graCc_VsFSVzYbf58El-6w&s" alt="external-no-data-empty-state-flat-flat-juicy-fish"/>
    </div>
    </div> :
        <UpcomingContests contests = {contests} />}
    </div>
  )
}

export default ContestList
