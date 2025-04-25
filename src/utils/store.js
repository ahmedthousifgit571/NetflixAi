import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice'
import movieReducer from '../utils/movieSlice'

const store = configureStore({
    reducer:{
        user:userReducer,
        movies: movieReducer
    }
})

export default store