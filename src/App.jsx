import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Home from "./components/Home"
import DayContests from "./components/DayContests"
import ContestCalendar from "./components/ContestCalendar"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import RegisteredContests from "./components/RegisteredContests"



function App() {
  
  return (
    <>
    <Provider store = {appStore}>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Body />}>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/contests/:date" element = {<DayContests/>} />
        <Route path = "/contest" element = {<ContestCalendar/>} />
        <Route path = "/user/registered-contests" element = {<RegisteredContests/>} />
         </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
