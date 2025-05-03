import React from 'react';
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
  
  if (!trailerVideo) return null;
  
  // Constructing the YouTube embed URL with proper parameters
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`;
  
  return (
    <div className="w-full h-full absolute top-0 left-0">
      {/* Main video container */}
      <iframe 
        className="w-full h-full object-cover"
        src={youtubeEmbedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default VideoBackground;