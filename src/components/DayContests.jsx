import React from 'react'
import { useParams } from 'react-router-dom'

const DayContests = () => {
    const {date} = useParams()
    const newDate = new Date(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = newDate.toLocaleString('en-us',options)
  return (
    <div>
      <div className="m-12 text-3xl sm:text-4xl md:text-5xl "> {formattedDate}</div>
    </div>
  )
}

export default DayContests
