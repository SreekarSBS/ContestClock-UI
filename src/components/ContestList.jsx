import React, { useEffect, useState } from 'react'

const ContestList = () => {
    const [contests,setContests] = useState();

    useEffect(() => {
        fetchContests()
    },[])

    const fetchContests = async() => {
        const res = await fetch("https://codeforces.com/api/contest.list");
        const jsonRes = await res.json()
        setContests(jsonRes?.result)
      
        
    }
 
  return (
    <div className=' border border-black sm:w-2/3'>
        {
            contests?.map((item) => {
                return item.phase === "BEFORE" && (
                <div key={item?.id} className="flex text-sm sm:text-lg md:text-lg m-4 p-2 border-2  ">
                    <div>
                    <div className='md:text-xl xl:text-2xl font-semibold'>{item?.name}</div>
                    <div>{new Date(item?.startTimeSeconds * 1000).toUTCString()}</div>
                    </div>
                    <div className=" ml-auto flex flex-col lg:flex-row">
                        <button className='bg-gradient-to-l from-blue-500 to-cyan-500 text-white p-1.5 md:p-2   m-2 rounded-2xl'>Register</button>
                        <button className=' p-1.5 m-2 md:p-2   rounded-2xl'>Remind</button>
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default ContestList
