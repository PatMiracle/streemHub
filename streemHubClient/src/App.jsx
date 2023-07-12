import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import VerifyEmail from './pages/VerifyEmail'
import Verified from './pages/Verified'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/posts', element: <Posts /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/verified', element: <Verified /> },
])

const App = () => <RouterProvider router={routes} />

export default App
