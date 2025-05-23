import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth"
import { addUsers, removeUsers } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const gptSearchButton = useSelector(store => store.gpt.showGptSearch)
  
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e?.target?.value))
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch())
  }

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUsers({ uid, email, displayName }))
        navigate("/browse")
      } else {
        dispatch(removeUsers())
        navigate('/')
      }
    })

    // Clean up subscription
    return () => unsubscribe()
  }, [])


  return (
    <header className='px-4 sm:px-8 md:px-12 py-4 md:py-6 flex items-center justify-between absolute w-full top-0 left-0 z-50'>
      {/* Netflix Logo - responsive size */}
      <div className='flex-1'>
        <svg viewBox="0 0 111 30" className="h-6 sm:h-7 md:h-8 text-red-600 fill-current" aria-hidden="true" focusable="false">
          <g>
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
          </g>
        </svg>
      </div>

      {/* Right section: Language selector and buttons - now responsive */}
      <div className='flex items-center space-x-1 sm:space-x-2'>
        {/* GPT search bar for recommendation - responsive padding and text */}
        <div className='relative flex items-center'>
          <button 
            onClick={handleGptSearchClick} 
            className='bg-red-600 hover:bg-red-700 text-white font-medium text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded transition duration-200 flex items-center'
          >
            { 
              !gptSearchButton ?
              <> 
                <span>Gemini</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg> 
              </>
              :
              <span>Home</span>
            }
          </button>
        </div>

        {/* language selector - responsive sizing */}
        <div className='relative'>
          {
            gptSearchButton && 
            <>
              <select 
                className="text-xs sm:text-sm appearance-none bg-black bg-opacity-20 text-white border border-white border-opacity-30 rounded px-2 sm:px-4 md:px-6 py-1 pr-6 sm:pr-8 focus:outline-none focus:ring-1 focus:ring-white" 
                onChange={handleLanguage}
              >
                {SUPPORTED_LANGUAGES.map(lang => 
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                )}
              </select>
              
              {/* pointer arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 sm:px-2 text-white">
                <svg className="fill-current h-3 w-3 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </>
          }
        </div>

        {/* sign in/out button - responsive text and padding */}
        {user ? (
          <button
            className="bg-red-600 text-white text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 md:px-4 py-1 rounded hover:bg-red-700"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <button className='bg-red-600 text-white text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 md:px-4 py-1 rounded hover:bg-red-700'>
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header