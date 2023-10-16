import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMoviesNames, gptMoviesResult } = useSelector((store) => store.gpt);
  if (!gptMoviesNames) return null;

  return (
    <div className=" p-4 m-4 text-white">
      <div>
        {gptMoviesNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMoviesResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
