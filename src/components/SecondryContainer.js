import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const nowPlayingMovies = movies.nowPlayingMovies;
  const popularMovies = movies.popularMovie;
  const topRatedMovies = movies.topRated;
  const upcomingMovie = movies.upcomingMovie;

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-64 pl-2 md:pl-10 relative z-20">
        <MovieList movies={nowPlayingMovies} title={"Now Playing"} />
        <MovieList movies={popularMovies} title={"Popular Movies"} />
        <MovieList movies={topRatedMovies} title={"Top Rated"} />
        <MovieList movies={upcomingMovie} title={"Upcoming Movie"} />
      </div>
    </div>
  );
};

export default SecondryContainer;
