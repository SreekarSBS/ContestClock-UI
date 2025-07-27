import React, { useEffect, useState } from 'react'
import ShimmerList from './Shimmer/ShimmerList';

const ContestList = () => {
    const [contests,setContests] = useState();

    useEffect(() => {
        fetchContests()
    },[])

    const fetchContests = async() => {
        // const res = await fetch("https://codeforces.com/api/contest.list");
        const res1 = await fetch("https://node.codolio.com/api/contest-calendar/v1/all/get-contests?startDate=2025-06-28T18%3A30%3A00.000Z&endDate=2025-08-09T18%3A30%3A00.000Z")
        const jsonRes1 = await res1.json()
        // const jsonRes = await res.json()
         setContests(jsonRes1?.data)
        console.log(jsonRes1);
        
    }
//  if(!contests || contests.length === 0) return <ShimmerList />
  return (
    <div className='flex-col'><div className="font-bold montserrat-logo text-3xl mx-8">Upcoming Contests</div>
    <div className=' sm:w-full'>
        {
            contests?.map((item) => {
                return (
                <div key={item._id} className="flex text-sm sm:text-lg md:text-lg m-6 p-2 border-2  border-gray-400 rounded-2xl  ">
                    <div>
                    <div className='md:text-xl xl:text-2xl font-light text-sky-400'>{item.contestName}</div>
                    <div>{item.contestStartDate}</div>
                    </div>
                    <div className=" ml-auto flex flex-col items-center lg:flex-row">
                        <button className='bg-gradient-to-l from-blue-400 to-cyan-500 text-black  p-1.5 md:p-2   m-2 rounded-2xl'>Register</button>
                        <button className=' p-1.5 m-2 md:p-2 border border-blue-400  rounded-2xl'>Remind</button>
                    </div>
                </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default ContestList
