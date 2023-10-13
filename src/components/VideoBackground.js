import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const VideoBackground = ({ videoId }) => {
  const trailerVideo = useSelector((store) => store.movies.TrailerVideo);

  useMovieTrailer(videoId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&loop=1&mute=1 "
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoBackground;
