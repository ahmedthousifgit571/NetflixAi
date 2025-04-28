import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";


//this hook used to fetch movies from tmdb api and render 
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getLatestMovie();
  }, []);

  const getLatestMovie = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const json = await movieData.json();
    // console.log('popular movies',json.results);
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
