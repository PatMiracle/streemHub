import { Link } from 'react-router-dom'
import { IoNotificationsOutline, IoPersonCircle } from 'react-icons/io5'

const PostsNavBar = () => {
  return (
    <nav className="py-[4%] flex justify-between items-center gap-6">
      <Link to="/">
        <img src="/logo.svg" alt="logo" className="w-14" />
      </Link>
      <div className="flex gap-4 items-center ml-[7%]">
        <Link to="/">
          <img src="/home.svg" alt="" />
        </Link>
        <Link>
          <img src="/square.svg" alt="" />
        </Link>
        <Link>
          <img src="/community.svg" alt="" />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link className="w-12 h-12 rounded-full grid place-content-center bg-purple600">
          <IoNotificationsOutline className="text-white" size={30} />
        </Link>
        <Link>
          <IoPersonCircle className="text-purple500" size={56} />
        </Link>
      </div>
    </nav>
  )
}

export default PostsNavBar
