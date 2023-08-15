import { useLocation, Outlet, Link } from 'react-router-dom'
import { ElementPlus, Message, MessageRemove, Star1 } from 'iconsax-react'

const sidebar = [
  {
    icon: <Message size={24} variant="Bold" />,
    text: 'all messages',
    url: '/messages/all',
  },
  {
    icon: <Star1 size={24} variant="Bold" />,
    text: 'starred messages',
    url: '/messages/starred',
  },
  {
    icon: <MessageRemove size={24} variant="Bold" />,
    text: 'deleted messages',
    url: '/messages/deleted',
  },
]

const MessagesLayout = () => {
  const location = useLocation()
  return (
    <section
      className="border-[3px] border-purple500 pt-7 rounded-[30px] h-screen fixed"
      style={{ width: 'calc(100% - 165px)' }}
    >
      <div className="flex pl-14 pr-9 pb-5 justify-between items-baseline border-b-[3px] border-b-purple500">
        <h3 className="font-medium text-4xl">Messages</h3>
        <button className="bg-purple500 text-black flex items-center gap-2 px-4 py-2 rounded-lg">
          <ElementPlus />
          <span>New message</span>
        </button>
      </div>
      <div className="flex">
        <aside className="w-[250px] border-r-2 h-screen border-r-purple500">
          {sidebar.map(({ icon, text, url }, i) => {
            return (
              <Link
                key={i}
                to={url}
                className={`flex gap-5 pl-8 items-center py-6 border-b-2 border-b-purple500 hover:text-purple500 duration-300 ${
                  location.pathname === url ? 'text-purple500' : ''
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
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default MessagesLayout
