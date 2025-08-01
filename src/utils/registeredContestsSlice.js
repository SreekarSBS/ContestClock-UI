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
        clearContest :() => null
    }
})

export const {addContest,removeContest,clearContest} = registeredContestSlice.actions;
export default registeredContestSlice.reducer