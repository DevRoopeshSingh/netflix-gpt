import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="p-6 bg-black opacity-90">
      <h1 className="px-4 text-2xl text-white font-bold">{title}</h1>
      <div className="flex overflow-x-auto space-x-4 mt-4 ">
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
