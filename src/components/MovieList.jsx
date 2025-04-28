import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieList = ({ title, movies }) => {
    
  const sliderRef = useRef(null);
  
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };
  
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };
  
  if (!movies || movies.length === 0) return null;  //early return condition
  
  return (
    <div className="mb-8 relative group">
      <h2 className="text-2xl font-bold text-white px-6 mb-2 hover:text-gray-300">{title}</h2>        
      
      <div className="absolute left-0 top-0 bottom-0 flex items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={slideLeft}
          className="bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth py-4 px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-2">
          {movies.map(movie => (
            <MovieCard 
              key={movie?.id} 
              id={movie?.id}
              poster_path={movie?.poster_path}
              title={movie?.title || movie?.name}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute right-0 top-0 bottom-0 flex items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={slideRight}
          className="bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
