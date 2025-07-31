import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import registeredContestReducer from "./registeredContestsSlice"
const appStore = configureStore({
    reducer : {
      user : userReducer,
      registeredContests : registeredContestReducer
    }
})


export default appStore