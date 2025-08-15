
import { AddToCalendarButton } from 'add-to-calendar-button-react'
const AddCalendarWrapper = ({eventInfo,item,startDate,endDate,startTime,endTime}) => {
  return (
   
    <AddToCalendarButton
    name={eventInfo?.event?.title || item?.contestName}
    options={['Apple','Google','Yahoo','iCal']}
    startDate={startDate}
    endDate={endDate}
    startTime={startTime}
    endTime={endTime}
    location="Online"
    description={`Reminder to attempt the contest ${eventInfo?.event?.title || item?.contestName}`}
    timeZone="Asia/Kolkata"
    buttonStyle="3d"
    trigger="click"
  ></AddToCalendarButton>
  )
}

export default AddCalendarWrapper
