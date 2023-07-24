import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  Profile,
  NotificationBing,
  MessageNotif,
  Setting2,
} from 'iconsax-react'
import square from '../assets/vectors/square.svg'
import community from '../assets/vectors/community.svg'
import { IoPersonCircle } from 'react-icons/io5'
import { MdPlayArrow } from 'react-icons/md'

const sidebar = [
  { icon: <Profile size={30} />, url: '/profile' },
  { icon: <NotificationBing size={30} />, url: '/notifications' },
  { icon: <MessageNotif size={30} />, url: '/messages' },
  { icon: <Setting2 size={30} />, url: '/settings' },
]

const DashboardLayout = () => {
  const location = useLocation()
  const [search, setSearch] = useState('')
  const [dropdown, setDropDown] = useState(false)

  return (
    <>
      {/* sidebar */}
      <aside className="fixed left-0 top-0 w-[85px] h-screen bg-purple500 grid gap-5 py-16">
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
      {/* main */}
      <main
        className="absolute left-[85px] p-10"
        style={{ width: 'calc(100% - 85px)' }}
      >
        <div className="flex items-center justify-between relative pb-7">
          {/* search bar */}
          <form
            className="flex items-center gap-4 bg-white rounded-[20px] py-4 px-6  w-8/12"
            onSubmit={(e) => e.preventDefault()}
          >
            <span
              className="rounded-lg py-2 px-3"
              style={{
                boxShadow: '2px 4px 18px rgba(0, 0, 0, 0.25)',
              }}
            >
              <select
                name="categories"
                id="categories"
                className="xl:w-[100px] lg:w-[90px] xl:text-base lg:text-sm cursor-pointer text-black"
              >
                <option value="category">Categories</option>
                <option value="books">Books</option>
                <option value="projects">Projects</option>
                <option value="reasearch">Research works</option>
                <option value="articles">Articles</option>
                <option value="codes">Codes</option>
                <option value="links">Links</option>
              </select>
            </span>
            <input
              type="text"
              className="border-l-2 border-l-black px-4 py-2 flex-[40%]"
              placeholder="Search different categories"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="font-semibold text-purple500 bg-black py-2 xl:px-5 lg:px-3 rounded-[20px]">
              Streem Now
            </button>
          </form>
          <div className="flex items-center gap-5">
            <Link>
              <img src={square} alt="" className="w-7" />
            </Link>
            <Link>
              <img src={community} alt="" className="w-8" />
            </Link>
            {/* dropdown */}
            <div
              className="h-[46px] w-[170px] border border-purple500 rounded-lg flex gap-3 justify-center items-center cursor-pointer"
              onClick={() => setDropDown(!dropdown)}
            >
              <IoPersonCircle className="text-purple500" size={28} />
              <span className="text-sm">Bob Miller</span>
              <MdPlayArrow className="rotate-90 text-purple500" size={23} />
            </div>
            {dropdown && (
              <div className="grid gap-3 w-[170px] absolute right-0 top-16 bg-[#0000007a]  border border-purple500 rounded-lg cursor-pointer text-sm duration-300 z-50">
                <button className="flex gap-4 items-center pt-2 px-3">
                  {' '}
                  <IoPersonCircle className="text-purple500" size={25} />
                  Leo Net
                </button>
                <button className="pt-2 px-4 text-left border-t border-t-purple500">
                  Add Account
                </button>
                <button className="p-2 px-4 text-left border-t border-t-purple500">
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
        <Outlet />
      </main>
    </>
  )
}

export default DashboardLayout
