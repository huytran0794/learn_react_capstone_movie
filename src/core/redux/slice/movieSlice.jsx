import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: initialState,
  reducers: {
    getMovieList: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

const movieReducer = movieSlice.reducer;

export default movieReducer;
