import React, { useRef, useState } from 'react'
import Header from './Header'
import validateData from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { BG_URL } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  
  const navigate = useNavigate()

  const email = useRef(null)
  const password = useRef(null)

  const handleButtonclick = () => {
    let validEmail = email.current.value
    let validPassword = password.current.value
   
    const message = validateData(validEmail, validPassword)
    setErrorMessage(message)

    if(message) return

    // signup part for users
    if(!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(auth, validEmail, validPassword)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(auth, validEmail, validPassword)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  }

  const handleToggleSignup = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className='w-full bg-black'>
      {/* background image with overlay */}
      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100' style={{
        backgroundImage:`url(${BG_URL})`
      }} />
        
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Header component */}
      <Header />

      {/* login form container - now with responsive padding and width */}
      <div className="relative z-10 flex justify-center items-center min-h-screen pt-16 md:pt-20 pb-6 md:pb-10 px-2 md:px-4">
        <div className="bg-black/75 rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-8 md:p-12 md:pt-10">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
          
          <form className="flex flex-col gap-3 md:gap-4" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name input - only for signup */}
            {!isSignInForm && (
              <div>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="w-full bg-zinc-800 text-white p-3 md:p-4 rounded border border-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>
            )}
            
            {/* Email input */}
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="w-full bg-zinc-800 text-white p-3 md:p-4 rounded border border-zinc-600 focus:outline-none focus:border-zinc-400"
            />
            
            {/* Password input */}
            <div>
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full bg-zinc-800 text-white p-3 md:p-4 rounded border border-zinc-600 focus:outline-none focus:border-zinc-400"
              />
            </div>
            
            {/* Error message */}
            <p className='text-red-700 font-bold text-sm md:text-base'>{errorMessage}</p>

            {/* Confirm Password - only for signup */}
            {!isSignInForm && (
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-zinc-800 text-white p-3 md:p-4 rounded border border-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>
            )}
            
            {/* Sign In/Up button */}
            <button
              type="submit"
              onClick={handleButtonclick}
              className="bg-red-600 text-white py-2 md:py-3 rounded font-medium hover:bg-red-700 transition mt-4 md:mt-6"
            >
              { isSignInForm ? "Sign In" : "Sign Up" }
            </button>
            
            {/* OR divider */}
            <div className="flex items-center justify-center text-zinc-500 my-2">
              <span>OR</span>
            </div>
            
            {/* Use a sign-in code button */}
            <button
              type="button"
              className="bg-zinc-700/70 text-white py-2 md:py-3 rounded font-medium hover:bg-zinc-600/70 transition"
            >
              Use a sign-in code
            </button>
            
            {/* Forgot password link */}
            <div className="text-center mt-2">
              <a href="#" className="text-zinc-400 hover:underline text-xs md:text-sm">
                Forgot password?
              </a>
            </div>
            
            {/* Remember me checkbox */}
            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-3 h-3 md:w-4 md:h-4 accent-zinc-600"
              />
              <label htmlFor="remember" className="text-zinc-400 text-xs md:text-sm ml-2">
                Remember me
              </label>
            </div>
            
            {/* Toggle Sign In/Sign Up */}
            <p className="text-white text-sm md:text-base ml-1 hover:underline cursor-pointer" onClick={() => handleToggleSignup()}>
              {isSignInForm ? "New to Netflix? Sign up now" : "Already a user, sign in"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login