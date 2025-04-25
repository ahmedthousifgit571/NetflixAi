import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
  
  if (!trailerVideo) return null;

  // Constructing the YouTube embed URL with proper parameters to match Netflix style
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`;
  
  return (
    
    <div className="absolute top-0 left-0 w-full h-full">
    {/* Main video container */}
    <div className="relative w-full h-full">
      {/* The actual video iframe */}
      <iframe 
        className="w-full aspect-video object-cover"
        src={youtubeEmbedUrl}
        title="Netflix Background Player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></iframe>
      
      {/* Gradient overlays - these should be INSIDE the video container */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-1/2 bottom-0"></div>
    </div>
  </div>
    
  );
};

export default VideoBackground;