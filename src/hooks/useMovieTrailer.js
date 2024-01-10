import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (videoId) => {
  //fetching the trailer video && update the store with video data

  const dispatch = useDispatch();

  const TrailerVideo = useSelector((store) => store.TrailerVideo);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonResp = await data.json();
    const filterData = jsonResp.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonResp.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !TrailerVideo && getMovieVideo();
  }, []);
};
export default useMovieTrailer;
