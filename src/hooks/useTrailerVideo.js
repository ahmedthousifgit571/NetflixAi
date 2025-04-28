import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

// fetching the trailer video from tmdb api and updating the store with trailer video
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const movieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const json = await movieTrailer.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
