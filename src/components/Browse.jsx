import React, {useState } from 'react'
import Header from './Header' 
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
const showGptSearchComp = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      { 
      showGptSearchComp ? <GptSearch /> 
      :
      <>
         <MainContainer />
         <SecondaryContainer />
      </> 
      }
      
      
      </div>
  )
}

export default Browse