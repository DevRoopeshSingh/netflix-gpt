import React from "react";
import MovieCard from "./MovieCard";
import "../custom-scrollbar.css";

function MovieList({ title, movies }) {
  return (
    <div className="p-6 bg-black opacity-80">
      <h1 className="px-4 text-2xl text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll  space-x-4 mt-4 ">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
