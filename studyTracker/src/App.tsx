import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import TestPage from './pages/TestPage'
import AppHeader from './layout/AppHeader'

const Layout = () => {
  return(
    <div className='container'>
    <header>
      <AppHeader/>
    </header>
    <Outlet/>
    <footer>
      Test footer 2
    </footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: 'home', element: <Home/>},
    ],
  },
  {
    path: '/test',
    element: <TestPage/>,
  }
]);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
