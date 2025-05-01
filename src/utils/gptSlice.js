import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gptSearch',
    initialState:{
        showGptSearch : false
    },
    reducers:{
      toggleGptSearch : (state)=>{
        state.showGptSearch = !state.showGptSearch
      }
    }
})

export const {toggleGptSearch} = gptSlice.actions
export default gptSlice.reducer