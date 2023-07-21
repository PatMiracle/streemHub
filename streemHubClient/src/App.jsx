import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import VerifyEmail from './pages/VerifyEmail'
import Verified from './pages/Verified'
import DashboardLayout from './components/DashboardLayout'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Settings from './pages/Settings'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/posts', element: <Posts /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/verified', element: <Verified /> },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/profile', element: <Profile /> },
      { path: '/notifications', element: <Notifications /> },
      { path: '/messages', element: <Messages /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
])

const App = () => {
  return (
    <>
      <div className="bg-white fixed top-0 left-0 min-h-screen z-40 w-full lg:hidden block">
        <h4 className="text-black text-lg font-medium">
          Hey there StreemHub is currently unavailable for mobile devices
        </h4>
        <h4 className="text-black text-lg font-medium">
          Please swicth to desktop
        </h4>
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
