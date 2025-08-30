import React, { lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const UpcomingWrapper = lazy(() => import('./UpcomingWrapper'));
import {
    Accordion,
  } from "./ui/accordion"
  import { addContest } from '../utils/registeredContestsSlice';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useOutletContext } from 'react-router-dom';

  


const UpcomingContests = ({contests}) => {
    const dispatch = useDispatch()
    const context = useOutletContext();
    const user  = useSelector(store => store.user)
    const savedContests = useSelector(store => store.registeredContests)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const optionsTimer = { hour : 'numeric',minute : 'numeric'} 

const setSavedEvents = context[4]
const handleRemindClick = async(contestId) => {
    try{
        if(!user)  toast.error('Please Login to register Contests!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
  const res = await axios.post(BASE_URL + "/user/saveContests/" + contestId ,{},{
    withCredentials : true, 
    headers : {
        'Authorization' : "Bearer " + user?.token
    }
  })
  const formattedObject = res?.data?.data?.savedContests.
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
            setSavedEvents(formattedObject);
  dispatch(addContest(res?.data?.data.savedContests));
  // console.log(res?.data?.data.savedContests);
  toast.success('Reminder Set for an Hour before the contest !', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
}
catch(err){
    // console.log(err);
}
}

const handleDeleteContest = async(contestId) => {
    
    try {
    const res = await axios.delete(BASE_URL +"/user/deleteContests/"+contestId,{
        withCredentials : true,
        headers : {
            'Authorization': 'Bearer ' + user?.token
        }
    })
    const formattedObject = res?.data?.data?.savedContests.
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
            setSavedEvents(formattedObject);
    dispatch(addContest(res?.data?.data?.savedContests))
    // console.log(res?.data?.data?.savedContests);
    toast.success('Reminder removed Successfully !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
}catch(err){
    // console.log(err);
    
}
}

  return (
    <div className=' sm:w-full'>
    {
        contests?.map((item,index) => {
            return  (
                <Accordion key={item?._id} type="single" collapsible>
                    <Suspense fallback={<div className='w-full h-20 flex justify-center items-center'>Loading...</div>}>
                    <UpcomingWrapper 
                    item = {item}
                     savedContests = {savedContests}
                     index = {index} 
                    handleDeleteContest = {handleDeleteContest}
                    handleRemindClick = {handleRemindClick}
                    options = {options} 
                    optionsTimer = {optionsTimer}
                      />
                    </Suspense>
            </Accordion>
            )
            
        })
    }
</div>
  )
}

export default UpcomingContests
