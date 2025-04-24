import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"users",
    initialState:null,
    reducers : {
        addUsers : (state,action)=>{
          return action.payload
        },
        removeUsers :()=>{
            return null
        }
    }    
})

export const {addUsers,removeUsers} = userSlice.actions
export default userSlice.reducer