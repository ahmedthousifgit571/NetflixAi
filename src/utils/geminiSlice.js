import { createSlice } from '@reduxjs/toolkit';

const geminiSlice = createSlice({
  name: 'gpt',
  initialState: {
    gptMovies: null,
  },
  reducers: {
    addGeminiMovieResult: (state, action) => {
      state.gptMovies = action.payload;
    },
    clearGeminiMovies: (state) => {
      state.gptMovies = null;
    }
  },
});

export const { addGeminiMovieResult, clearGeminiMovies } = geminiSlice.actions;
export default geminiSlice.reducer;