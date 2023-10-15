import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;
  const mainMove = movies[Math.floor(Math.random() * 10) + 1];
  const { original_title, overview, id } = mainMove;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
