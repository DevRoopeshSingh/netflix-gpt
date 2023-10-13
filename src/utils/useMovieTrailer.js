import { useEffect } from "react";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./movieSlice";

const useMovieTrailer = (videoId) => {
  //fetching the trailer video && update the store with video data

  const dispatch = useDispatch();
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
    getMovieVideo();
  }, []);
};
export default useMovieTrailer;
