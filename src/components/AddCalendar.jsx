
import { lazy, Suspense } from 'react';
const AddCalendarWrapper = lazy(() => import("./AddCalendarWrapper"));

const AddCalendar = ({eventInfo,item}) => {
    const startObj = new Date(eventInfo?.event?.extendedProps?.contestStartDate || item?.contestStartDate)
    const endObj = new Date(eventInfo?.event?.extendedProps?.contestEndDate || item?.contestEndDate)
    const startDate = startObj.toISOString().split('T')[0];
    const endDate = endObj.toISOString().split('T')[0]

    const toISTTime = (date) =>
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }).format(date)
    
      const startTime = toISTTime(startObj)
      const endTime = toISTTime(endObj)
    

  return (
     <Suspense fallback={<div>Loading Calendar...</div>}>
    <AddCalendarWrapper 
     eventInfo = {eventInfo}
     item = {item}
     startDate = {startDate}
     endDate = {endDate}
     startTime = {startTime}
     endTime = {endTime}
      />
    </Suspense>
  )
}

export default AddCalendar


 
  