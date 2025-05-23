# Netflix Clone with React + Vite

![Netflix Clone](https://via.placeholder.com/800x400)

A comprehensive Netflix clone built with React and Vite that showcases modern web development practices including authentication, state management, API integration, and AI-powered recommendations.

## Features

- **Authentication** - Secure user authentication with Firebase
- **Protected Routes** - Content access restriction for authenticated users only
- **Responsive Design** - Mobile-first responsive UI built with Tailwind CSS
- **Movie Catalog** - Real movie data integration using TMDB API
- **AI Recommendations** - Smart movie recommendations powered by Google's Gemini API
- **Multi-language Support** - UI available in multiple languages
- **Global State Management** - Centralized state using Redux Toolkit
- **Advanced Form Handling** - Forms built with useRef for controlled inputs
- **Trailer Playback** - YouTube-integrated movie trailer playback
- **Movie Search** - AI-enhanced movie search functionality

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication & Database**: Firebase
- **APIs**: TMDB API, Google Gemini API
- **Deployment**: Firebase Hosting
- **Routing**: React Router v6

## Project Structure

```
netflix-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Browse.jsx
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── MainContainer.jsx
│   │   ├── VideoBackground.jsx
│   │   ├── VideoTitle.jsx
│   │   ├── SecondaryContainer.jsx
│   │   ├── MovieList.jsx
│   │   ├── MovieCard.jsx
│   │   └── GptSearch.jsx
│   ├── hooks/
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTrailerVideo.js
│   │   └── useUpcomingMovies.js
│   ├── utils/
│   │   ├── firebase.js
│   │   ├── constants.js
│   │   └── validate.js
│   ├── store/
│   │   ├── appStore.js
│   │   ├── userSlice.js
│   │   ├── moviesSlice.js
│   │   └── gptSlice.js
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Setup and Installation

### Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn
- Firebase account
- TMDB API key
- Google Gemini API key

### Installation Steps

1. Clone the repository
   ```bash
   git clone https://github.com/ahmedthousifgit571/NetflixAi.git
   cd netflix-clone
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create environment variables file
   ```bash
   # Create a .env file and add the following variables
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Firebase Configuration

### Authentication Setup

```javascript
// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
```

## Key Components

### Authentication

```javascript
// Sign In Form Example with useRef
const SignIn = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      dispatch(addUser({ uid: user.uid, email: user.email }));
      navigate("/browse");
    } catch (error) {
      // Error handling
    }
  };
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSignIn();
    }}>
      <input ref={email} type="email" placeholder="Email" required />
      <input ref={password} type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};
```

### Protected Routes

```javascript
// Protected Route Example
const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  
  return children;
};
```

### Redux Store Setup

```javascript
// Store Configuration
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
```

### API Integration

```javascript
// Example Hook for Fetching Movies
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
```

## Multi-language Support

The application supports multiple languages using a language configuration system:

```javascript
const languageConstants = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
    // other translations
  },
  hi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
    // other translations
  },
  // other languages
};
```

## Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

### Deploying to Firebase

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init

# Deploy to Firebase Hosting
firebase deploy
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration



## License

MIT © [Ahmed Thousif]