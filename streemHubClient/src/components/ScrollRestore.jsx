import { ScrollRestoration, Outlet } from 'react-router-dom'
const ScrollRestore = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

export default ScrollRestore
