import {createBrowserRouter} from 'react-router-dom'
import Body from '../components/Body'
import Browse from '../components/Browse'
import Login from '../components/Login'




const appRouter = createBrowserRouter([
    {
        path :"/",
        element: <Body />
        
    },
    {
        path:"/browse",
        element:<Browse />

    }
])

export default appRouter