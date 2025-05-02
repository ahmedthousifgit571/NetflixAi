import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';


const GptMovieSuggestions = () => {
  const { gptMovies } = useSelector(store => store.gemini);
  
  if (!gptMovies) return null;
  
  const { tmdbResults } = gptMovies;

  if (!tmdbResults || tmdbResults.length === 0) {
    return (
      <div className="text-white text-center mt-8">
        No movie results found. Try a different search.
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 my-8">
      <h2 className="text-2xl text-white font-medium mb-5">Recommended Movies</h2>
      
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {tmdbResults.map((movie, index) => (
          <div key={movie.id || index} className="flex-shrink-0">
            <MovieCard
              poster_path={movie?.poster_path}
              title={movie?.title}
              id={movie?.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;