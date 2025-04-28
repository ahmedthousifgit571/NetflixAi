// import React from 'react'
// import { IMG_CDN_URL } from '../utils/constant'

// const MovieCard = ({poster_path}) => {
//   return (
//     <div>
//       <img className='w-48 pr-4' src={IMG_CDN_URL+ poster_path} alt="img" />
//     </div>
//   )
// }

// export default MovieCard



import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constant';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

const MovieCard = ({ poster_path, title, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative min-w-48 transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`rounded-md overflow-hidden ${isHovered ? "scale-110 shadow-xl z-20" : ""}`}>
        <img 
          className="w-48 h-72 object-cover" 
          src={IMG_CDN_URL + poster_path} 
          alt={title || "Movie poster"} 
          loading="lazy"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col p-3">
            <div className="flex-grow">
              <p className="text-white font-semibold text-sm mb-2">{title}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button className="bg-white text-black p-1 rounded-full hover:bg-gray-200">
                  <Play size={16} fill="black" />
                </button>
                <button className="border border-gray-400 p-1 rounded-full text-white hover:border-white">
                  <Plus size={16} />
                </button>
                <button className="border border-gray-400 p-1 rounded-full text-white hover:border-white">
                  <ThumbsUp size={16} />
                </button>
              </div>
              
              <button className="border border-gray-400 p-1 rounded-full text-white hover:border-white">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
