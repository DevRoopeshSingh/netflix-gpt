import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";

function useTopRatedMovies() {
  const dispatch = useDispatch();

  const topRated = useSelector((store) => store.topRated);

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addTopRatedMovie(jsonData.results));
  };

  useEffect(() => {
   !topRated && fetchTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;
