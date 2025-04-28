import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)


  return (
    <div >
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.upcomingMovies} />
      <MovieList title={"Most Popular"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcomping"} movies={movies.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer
