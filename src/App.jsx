import './index.css'
import Body from './components/Body'
import { RouterProvider } from 'react-router-dom'
import appRouter from './routes/router'

function App() {


  return (
    <>
     <RouterProvider router={appRouter} />
    </>
  )
}

export default App
