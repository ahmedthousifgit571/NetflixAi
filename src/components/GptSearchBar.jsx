import React, { useState } from 'react'

const GptSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the search query with GPT API
    
  };

  return (
    <div className="pt-24 pb-12 px-4 md:px-12 w-full flex flex-col items-center">
      {/* Netflix GPT section title */}
      <div className="mb-8 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Netflix <span className="text-red-600">GPT</span>
        </h2>
        <p className="text-gray-300 mt-2">Get AI-powered movie recommendations</p>
      </div>
      
      {/* Search form */}
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-black bg-opacity-80 rounded-lg border border-gray-700 p-1 flex flex-col md:flex-row shadow-lg"
      >
        <input 
          className="flex-grow px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What do you want to watch today?" 
        />
        <button 
          className="bg-red-600 hover:bg-red-700 text-white font-medium md:w-40 w-full py-4 px-6 rounded transition duration-200 flex items-center justify-center"
        >
          <span className="mr-2">Search</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {/* Results section placeholder */}
      <div className="w-full max-w-5xl mt-10">
        {/* This section will be populated with the search results */}
        {/* You can add a loading state and results display here */}
      </div>
    </div>
  )
}

export default GptSearchBar