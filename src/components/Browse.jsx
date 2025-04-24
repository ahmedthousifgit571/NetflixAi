import React, { useState } from 'react'
import Header from './Header'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.error("Signout error:", error)
        navigate('/errorPage')
      });
  }

  // Mock data for featured content and categories
  const featuredContent = {
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    image: "/api/placeholder/1280/720"
  };

  const categories = [
    {
      id: 1,
      name: "Trending Now",
      movies: ["/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160"]
    },
    {
      id: 2,
      name: "Popular on Netflix",
      movies: ["/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160"]
    },
    {
      id: 3,
      name: "New Releases",
      movies: ["/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160", "/api/placeholder/280/160"]
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      {/* Navigation Menu */}
      <div className="pt-24 px-12">
        <nav className="flex space-x-6 mb-8">
          <button 
            className={`text-lg ${activeTab === 'home' ? 'font-bold' : 'text-gray-400'}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`text-lg ${activeTab === 'tv' ? 'font-bold' : 'text-gray-400'}`}
            onClick={() => setActiveTab('tv')}
          >
            TV Shows
          </button>
          <button 
            className={`text-lg ${activeTab === 'movies' ? 'font-bold' : 'text-gray-400'}`}
            onClick={() => setActiveTab('movies')}
          >
            Movies
          </button>
          <button 
            className={`text-lg ${activeTab === 'new' ? 'font-bold' : 'text-gray-400'}`}
            onClick={() => setActiveTab('new')}
          >
            New & Popular
          </button>
          <button 
            className={`text-lg ${activeTab === 'mylist' ? 'font-bold' : 'text-gray-400'}`}
            onClick={() => setActiveTab('mylist')}
          >
            My List
          </button>
          
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <img 
          src={featuredContent.image} 
          alt={featuredContent.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute bottom-0 left-0 p-12 z-20 w-1/2">
          <h1 className="text-5xl font-bold mb-4">{featuredContent.title}</h1>
          <p className="text-lg mb-6">{featuredContent.description}</p>
          <div className="flex space-x-4">
            <button className="bg-white text-black font-medium px-8 py-2 rounded flex items-center hover:bg-opacity-80">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Play
            </button>
            <button className="bg-gray-600 bg-opacity-70 text-white font-medium px-8 py-2 rounded flex items-center hover:bg-opacity-50">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Movie Categories */}
      <div className="px-12 pb-16">
        {categories.map(category => (
          <div key={category.id} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{category.name}</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {category.movies.map((movie, index) => (
                <div 
                  key={index} 
                  className="flex-none w-48 h-28 rounded overflow-hidden transition-transform duration-300 hover:scale-110 cursor-pointer"
                >
                  <img 
                    src={movie} 
                    alt={`Movie ${index}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Browse