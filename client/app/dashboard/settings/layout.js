'use client'

import Link from 'next/link'
import { ElementPlus, Message, MessageRemove, NotificationBing, Star1,Profile } from 'iconsax-react'
import { usePathname } from 'next/navigation'

const sidebar = [
  {
    icon: <Profile size={24} variant="Bold" />,
    text: 'Profile',
    url: '/dashboard/settings/profile',
  },
  {
    icon: <NotificationBing size={24} variant="Bold" />,
    text: 'Notifications',
    url: '/dashboard/settings/notifications',
  },
//   {
//     icon: <MessageRemove size={24} variant="Bold" />,
//     text: 'deleted messages',
//     url: '/dashboard/messages/deleted',
//   },
]

const MessagesLayout = ({ children }) => {
  const pathname = usePathname()

  return (
    <section
      className="border-[3px] border-purple500 pt-7 rounded-[30px] h-screen fixed"
      style={{ width: 'calc(100% - 165px)' }}
    >
      <div className="flex pl-14 pr-9 pb-5 justify-between items-baseline border-b-[3px] border-b-purple500">
        <h3 className="font-medium text-4xl">Settings</h3>
      </div>
      <div className="flex">
        <aside className="w-[250px] border-r-2 h-screen border-r-purple500">
          {sidebar.map(({ icon, text, url }, i) => {
            return (
              <Link
                key={i}
                href={url}
                className={`flex gap-5 pl-8 items-center py-6 border-b-2 border-b-purple500 hover:text-purple500 duration-300 ${
                  pathname === url ? 'text-purple500' : ''
                }`}
              >
                {icon}
                <h4 className="font-medium capitalize">{text}</h4>
              </Link>
            )
          })}
        </aside>
        {/* Outlet  */}
        <div
          className="py-9 px-8 overflow-y-scroll scrollbar-thin"
          style={{
            width: 'calc(100% - 240px)',
            height: 'calc(100vh - 125px)',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

export default MessagesLayout
