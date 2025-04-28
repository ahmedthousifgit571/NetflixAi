import React, {useState } from 'react'
import Header from './Header' 
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      </div>
  )
}

export default Browse