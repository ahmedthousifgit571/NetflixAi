import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";


//this hook used to fetch movies from tmdb api and render 
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getLatestMovie();
  }, []);

  const getLatestMovie = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );
    const json = await movieData.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
