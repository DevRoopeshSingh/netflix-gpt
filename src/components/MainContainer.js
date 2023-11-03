import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const [isMute, setIsMute] = useState(false);
  const movieIndex = useSelector((store) => store.movies.randomMovieIndex);
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[movieIndex];
  const toggleMute = () => {
    setIsMute(!isMute);
  };

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle
        title={original_title}
        overview={overview}
        isMute={isMute}
        toggleMute={toggleMute}
      />
      <VideoBackground videoId={id} isMute={isMute} />
    </div>
  );
};

export default MainContainer;
