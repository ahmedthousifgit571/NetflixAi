import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className='w-full bg-black'>
      {/* background image with overlay */}
      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat opactiy-100' style={{
        backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_small.jpg")`
      }} />
        
        {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Header component */}
      <Header />

      {/* login form container */}
      <div className="relative z-10 flex justify-center items-center min-h-screen pt-20 pb-10 px-4">
        <div className="bg-black/75 rounded-md w-full max-w-md p-12 pt-10">
          <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>
          
          <form className="flex flex-col gap-4">
            {/* Email input */}
            <div>
              <input
                type="text"
                placeholder="Email or mobile number"
                className="w-full bg-zinc-800 text-white p-4 rounded border border-zinc-600 focus:outline-none focus:border-zinc-400"
              />
            </div>
            
            {/* Password input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-zinc-800 text-white p-4 rounded border border-zinc-600 focus:outline-none focus:border-zinc-400"
              />
            </div>
            
            {/* Sign In button */}
            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700 transition mt-6"
            >
              Sign In
            </button>
            
            {/* OR divider */}
            <div className="flex items-center justify-center text-zinc-500 my-2">
              <span>OR</span>
            </div>
            
            {/* Use a sign-in code button */}
            <button
              type="button"
              className="bg-zinc-700/70 text-white py-3 rounded font-medium hover:bg-zinc-600/70 transition"
            >
              Use a sign-in code
            </button>
            
            {/* Forgot password link */}
            <div className="text-center mt-2">
              <a href="#" className="text-zinc-400 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
            
            {/* Remember me checkbox */}
            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 accent-zinc-600"
              />
              <label htmlFor="remember" className="text-zinc-400 text-sm ml-2">
                Remember me
              </label>
            </div>
            
            {/* New to Netflix */}
            <div className="mt-4 text-zinc-400 text-sm">
              New to Netflix?
              <a href="#" className="text-white ml-1 hover:underline">
                Sign up now
              </a>
              .
            </div>
          </form>
        </div>
      </div>
  



    </div>
  );
};

export default Login
