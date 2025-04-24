import './index.css'
import Body from './components/Body'
import { RouterProvider } from 'react-router-dom'
import appRouter from './routes/router'
import {Provider} from 'react-redux'
import store from './utils/store'

function App() {


  return (
    <Provider store={store}>
     <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
