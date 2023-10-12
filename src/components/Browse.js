import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />

      {/*
         MainContainer
        - VideoBackground
        - VideoTitle
        SeconndryConatiner
         - MovieList 
         - cards 
        
        */}
    </div>
  );
};

export default Browse;
