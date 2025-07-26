import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Home from "./components/Home"
import DayContests from "./components/DayContests"



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Body />}>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/contests/:date" element = {<DayContests/>} />
         </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
