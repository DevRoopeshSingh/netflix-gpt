import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo: null,
    popularMovie: null,
    topRated: null,
    upcomingMovie: null,
    randomMovieIndex: Math.floor(Math.random() * 10) + 1,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrailerVideo,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addRandomMovieIndex,
} = moviesSlice.actions;
export default moviesSlice.reducer;
