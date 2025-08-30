
import { AddToCalendarButton } from 'add-to-calendar-button-react'
const AddCalendarWrapper = ({eventInfo,item,startDate,endDate,startTime,endTime}) => {
  const contestUrl = eventInfo?.event?.url || item?.contestUrl;

  return (
   
    <AddToCalendarButton
    name={eventInfo?.event?.title || item?.contestName}
    options={['Apple','Google','Yahoo','iCal']}
    startDate={startDate}
    endDate={endDate}
    startTime={startTime}
    endTime={endTime}
    location="Online"
    url={contestUrl}
    description={`Reminder to attempt the contest: ${eventInfo?.event?.title || item?.contestName}
    Platform: ${eventInfo?.event?.extendedProps?.platform || item?.platform}
    Starts at ${startTime} (your local time)
    Registration link: ${contestUrl}`}
    
    timeZone= {Intl.DateTimeFormat().resolvedOptions().timeZone}
    buttonStyle="3d"
    trigger="click"
  ></AddToCalendarButton>
  )
}

export default AddCalendarWrapper
