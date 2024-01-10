import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";

function useUpcomingMovies() {
  const dispatch = useDispatch();

  const upcomingMovie = useSelector((store) => store.upcomingMovie);

  const fetchUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addUpcomingMovie(jsonData.results));
  };

  useEffect(() => {
    !upcomingMovie && fetchUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;
