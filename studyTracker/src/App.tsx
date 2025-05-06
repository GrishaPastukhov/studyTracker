import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import TestPage from './pages/TestPage'

const Layout = () => {
  return(
    <>
    <header>
      Header Test 2
    </header>
    <Outlet/>
    <footer>
      Test footer 2
    </footer>
    </>
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
