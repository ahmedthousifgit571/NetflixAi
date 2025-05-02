import { options } from "../utils/constant";

// This function will search TMDB for movies by title
export const searchMovies = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`,
        options
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch from TMDB');
      }
      
      const data = await response.json();
      
      // Return the first movie result or null if no results found
      return data.results.length > 0 ? data.results[0] : null;
    } catch (error) {
      console.error("Error searching for movie:", error);
      return null;
    }
  };