import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";

function usePopularMovies() {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addPopularMovie(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default usePopularMovies;
