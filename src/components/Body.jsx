import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { ToastContainer } from 'react-toastify'
import { addContest } from '../utils/registeredContestsSlice'







const Body = () => {
  
  const dispatch = useDispatch()
  // const savedContests = useSelector(store => store.registeredContests)
  const user = useSelector((store) => store.user)
  const [pictureURL,setPictureURL] = useState("")
  const [visibleContests,setVisibleContests] = useState(['leetcode','codeforces','atcoder','codechef','geeksforgeeks'])

  // const [contests, setContests] = useState([]);
  const [events, setEvents] = useState([]);
  const [savedEvents, setSavedEvents] = useState([]);
  const fetchPutUser = async(token) => {
    try{
    const userDocument =await axios.get(BASE_URL + "/user",{
      withCredentials : true,
      headers : {
        'Authorization': 'Bearer ' +token
      }
    })
    setPictureURL(userDocument?.data?.data?.picture)
    
    
  }catch(err){
    console.log(err);
    
  }
  }


  useEffect(() => {
    fetchContests();
  }, [visibleContests]);

  const fetchContests = async () => {
    try {
      const res = await axios.get(BASE_URL + `/contests/platform?platforms=${visibleContests.join(",")}`, {
        withCredentials: true,
      });
      // setContests(res?.data?.data);
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

  useEffect(() => { 
    fetchRegisteredContests()
    },[user])
    // const user = firebase.auth().currentUser;
    // if (user) {
    //   const token = await user.getIdToken(); // This is the right way
    //   // Pass this token in Authorization header
    // }
    const fetchRegisteredContests = async() => {
        try{
            const res = await axios.get(BASE_URL + "/user/registeredContests",{
                withCredentials : true,
                headers : {
                    'Authorization': 'Bearer ' + user?.token
                }
            })
            
            dispatch(addContest(res?.data?.data.savedContests))
            console.log(res?.data?.data.savedContests);
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
        }catch(err){
            console.log(err);
        }
    }  

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        console.log(user);
        // const idToken = await user.getIdToken();
        fetchPutUser(user?.accessToken)
        const cleanedUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          token : user?.accessToken
        };
       dispatch(addUser(cleanedUser))
      
        
      } else {
         
          console.log("Sign In");
      }
    });
  }, [auth]);
  console.log(pictureURL);
  
  return (
    <div className='min-h-screen flex flex-col'>
      
      <Header pictureURL = {pictureURL} />
    
      <ToastContainer/>

      <main className='flex-grow'>
    
      <Outlet context ={[visibleContests, setVisibleContests ,events,savedEvents]} />
      
      </main>
      <Footer />
    </div>
  )
}

export default Body
