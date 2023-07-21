import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  Profile,
  NotificationBing,
  MessageNotif,
  Setting2,
} from 'iconsax-react'

const sidebar = [
  { icon: <Profile size={36} />, url: '/profile' },
  { icon: <NotificationBing size={36} />, url: '/notifications' },
  { icon: <MessageNotif size={36} />, url: '/messages' },
  { icon: <Setting2 size={36} />, url: '/settings' },
]

const DashboardLayout = () => {
  const location = useLocation()

  return (
    <>
      {/* sidebar */}
      <aside className="fixed left-0 top-0 w-[100px] h-screen bg-purple500 grid gap-5 py-20">
        {sidebar.map(({ icon, url }, i) => {
          return (
            <Link
              key={i}
              to={url}
              className={`w-14 mx-auto h-14 rounded-full grid place-content-center ${
                location.pathname === url
                  ? 'bg-black text-purple500'
                  : 'text-black hover:bg-black hover:text-purple500'
              }`}
            >
              {icon}
            </Link>
          )
        })}
      </aside>
      <main
        className="absolute left-[100px] p-10"
        style={{ width: 'calc(100% - 100px)' }}
      >
        <Outlet />
      </main>
    </>
  )
}

export default DashboardLayout
