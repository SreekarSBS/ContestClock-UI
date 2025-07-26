
import CalendarUI from './CalendarUI'
import ContestList from './ContestList'

const Home = () => {
  return (
    <>
    <div className="font-bold  text-3xl mx-16 mt-8">Upcoming Contests</div>
    <div className='flex-col flex sm:flex-row m-12 gap-4 '>
      <ContestList />
      <CalendarUI />
    </div>
    </>
  )
}

export default Home
