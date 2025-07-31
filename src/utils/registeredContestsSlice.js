import { createSlice } from "@reduxjs/toolkit";

const registeredContestSlice = createSlice({
    name : "registeredContests",
    initialState : null,
    reducers : {
        addContest : (state,action) => action.payload,
        removeContest : (state,action) => {
            const filteredContests = state.filter(item => item._id != action.payload)
            return filteredContests
        },
    }
})

export const {addContest,removeContest} = registeredContestSlice.actions;
export default registeredContestSlice.reducer