import {createBrowserRouter, useNavigate} from 'react-router-dom'
import Body from '../components/Body'
import Browse from '../components/Browse'
import AuthWrapper from './AuthWrapper'




const appRouter = createBrowserRouter([
    {
        path :"/",
        element: <AuthWrapper><Body /></AuthWrapper> 
        
    },
    {
        path:"/browse",
        element:<AuthWrapper> <Browse /> </AuthWrapper>
 
    }
])



export default appRouter