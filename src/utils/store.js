import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice'
import movieReducer from '../utils/movieSlice'
import gptReducer from '../utils/gptSlice'
import configReducer from '../utils/configSlice'
import geminiReducer from '../utils/geminiSlice'

const store = configureStore({
    reducer:{
        user:userReducer,
        movies: movieReducer,
        gpt : gptReducer,
        config : configReducer,
        gemini: geminiReducer
    }
})

export default store