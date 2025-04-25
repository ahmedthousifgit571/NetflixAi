import React, {useState } from 'react'
import Header from './Header' 
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';


const Browse = () => {
  useNowPlayingMovies()

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      </div>
  )
}

export default Browse