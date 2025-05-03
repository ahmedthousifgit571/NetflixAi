import React, { useState } from 'react'
import { lang } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { generateMovieRecommendations } from '../utils/gemini';
import { searchMovies } from '../hooks/searchMovie';
import { addGeminiMovieResult } from '../utils/geminiSlice';


const GptSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  
  const configLang = useSelector(store => store.config.lang)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      // Generate movie recommendations using Gemini
      const prompt = `Act as a Movie Recommendation system. Suggest 6 movies for the query: "${searchQuery}". 
        Only return a comma-separated list of movie names. Example: Inception, The Dark Knight, Interstellar, ...`;
      
      const geminiResponse = await generateMovieRecommendations(prompt);
      console.log(geminiResponse)
      const movieNames = geminiResponse.split(',').map(name => name.trim());
      
      // Search TMDB for each movie
      const tmdbPromises = movieNames.map(movie => searchMovies(movie));
      const tmdbResults = await Promise.all(tmdbPromises);

      // Filter out any null results
      const validResults = tmdbResults.filter(result => result !== null);
      console.log("TMDB results:", validResults);
      
      dispatch(addGeminiMovieResult({ movieNames, tmdbResults: validResults }));
    } catch (err) {
      setError(err.message || 'Failed to fetch recommendations');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-8 md:pb-12 px-3 sm:px-4 md:px-12 w-full flex flex-col items-center">

      {/* Loading and error states */}
      {isLoading && (
        <div className="mt-4 text-white">
          <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-white"></div>
        </div>
      )}
      
      {error && (
        <div className="mt-4 text-red-500 text-center text-sm sm:text-base">
          ⚠️ {error}
        </div>
      )}

      {/* Netflix GPT section title */}
      <div className="mb-4 sm:mb-6 md:mb-8 w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Netflix <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 font-bold drop-shadow-[0_0_8px_rgba(104,117,245,0.6)]">GEMINI</span>
        </h2>
        <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Get AI-powered movie recommendations</p>
      </div>
      
      {/* Search form */}
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl bg-black bg-opacity-80 rounded-lg border border-gray-700 p-1 flex flex-col md:flex-row shadow-lg"
      >
        <input 
          className="flex-grow px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg"
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={lang[configLang].gptSearchPlaceholder}
        />
        <button 
          className="bg-red-600 hover:bg-red-700 text-white font-medium w-full md:w-40 py-3 sm:py-4 px-4 sm:px-6 rounded transition duration-200 flex items-center justify-center mt-2 md:mt-0"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="animate-pulse text-sm sm:text-base">Loading...</span>
          ) : (
            <>
              <span className="mr-2 text-sm sm:text-base">{lang[configLang].search}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </>
          )}
        </button>
      </form>

      {/* Results section placeholder */}
      <div className="w-full max-w-full sm:max-w-2xl md:max-w-5xl mt-6 sm:mt-8 md:mt-10">
        {/* This section will be populated with the search results */}
        {/* You can add a loading state and results display here */}
      </div>
    </div>
  )
}

export default GptSearchBar