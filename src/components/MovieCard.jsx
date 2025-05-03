import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constant';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

const MovieCard = ({ poster_path, title, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative min-w-36 sm:min-w-40 md:min-w-48 transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`rounded-md overflow-hidden ${isHovered ? "scale-110 shadow-xl z-20" : ""}`}>
        <img 
          className="w-36 h-52 sm:w-40 sm:h-60 md:w-48 md:h-72 object-cover" 
          src={IMG_CDN_URL + poster_path} 
          alt={title || "Movie poster"} 
          loading="lazy"
        />
        
        {/* Hover overlay - only show on desktop, since mobile doesn't have hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col p-2 sm:p-3">
            <div className="flex-grow">
              <p className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{title}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-1 sm:gap-2">
                <button className="bg-white text-black p-1 rounded-full hover:bg-gray-200">
                  <Play size={14} className="sm:hidden" fill="black" />
                  <Play size={16} className="hidden sm:block" fill="black" />
                </button>
                <button className="border border-gray-400 p-1 rounded-full text-white hover:border-white">
                  <Plus size={14} className="sm:hidden" />
                  <Plus size={16} className="hidden sm:block" />
                </button>
                <button className="border border-gray-400 p-1 rounded-full text-white hover:border-white">
                  <ThumbsUp size={14} className="sm:hidden" />
                  <ThumbsUp size={16} className="hidden sm:block" />
                </button>
              </div>
              
              <button className="border border-gray-400 p-1 rounded-full text-white hover:border-white">
                <ChevronDown size={14} className="sm:hidden" />
                <ChevronDown size={16} className="hidden sm:block" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;