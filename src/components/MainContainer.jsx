import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store=>store?.movies?.nowPlayingMovies)
    if (movies === null) return 
    const mainMovie = movies[0]
    const {original_title, overview, id} = mainMovie
    
    return (
      <div className="pt-[56px] md:pt-0 relative">
        {/* Container maintains aspect ratio on larger screens but has minimum height on mobile */}
        <div className="w-full aspect-video md:h-screen relative">
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id}/>
        </div>
      </div>
    )
}

export default MainContainer