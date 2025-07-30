import { AddToCalendarButton } from 'add-to-calendar-button-react'

const AddCalendar = ({eventInfo}) => {
    const startObj = new Date(eventInfo?.event?.extendedProps?.contestStartDate)
    const endObj = new Date(eventInfo?.event?.extendedProps?.contestEndDate)
    const startDate = startObj.toISOString().split('T')[0];
    const endDate = endObj.toISOString().split('T')[0]

    const toISTTime = (date) =>
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }).format(date)
    
      const startTime = toISTTime(startObj)
      const endTime = toISTTime(endObj)
    

  return (
    <div>
      <AddToCalendarButton
  name={eventInfo?.event?.title}

  options={['Apple','Google','Yahoo','iCal']}
  startDate={startDate}
  endDate={endDate}
  startTime={startTime}
  endTime={endTime}
  location="Online"
  description={`Reminder to attempt the contest ${eventInfo?.event?.title}`}
  timeZone="Asia/Kolkata"
  buttonStyle="3d"
  trigger="click"
></AddToCalendarButton>
    </div>
  )
}

export default AddCalendar


 
  