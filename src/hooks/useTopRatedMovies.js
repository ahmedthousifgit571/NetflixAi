import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";


//this hook used to fetch movies from tmdb api and render 
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getLatestMovie();
  }, []);

  const getLatestMovie = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await movieData.json();
    // console.log('popular movies',json.results);
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
