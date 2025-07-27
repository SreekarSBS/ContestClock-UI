

import CalendarUI from './CalendarUI'
import ContestCalendar from './ContestCalendar'
import ContestList from './ContestList'




const Home = () => {
 
  return (
    
    
    <div className='flex-col flex xl:flex-row m-10 '>
      <ContestList />
      <ContestCalendar />
    </div>
    
  )
}

export default Home
