import { Link } from 'react-router-dom'

const NavBar = () => {
  const navLinks = [
    { link: '/', text: 'home' },
    { link: 'posts', text: 'posts' },
    { link: '/', text: 'collab' },
    { link: '/', text: 'about' },
  ]
  return (
    <nav className="flex gap-6 items-center w-11/12 mx-auto pt-[4%] pb-[3%]">
      <Link to="/">
        <img src="/logo.svg" alt="logo" className="w-14" />
      </Link>
      {navLinks.map(({ link, text }, i) => (
        <Link to={link} className="text-xl capitalize" key={i}>
          {text}
        </Link>
      ))}
      <div className="ml-auto">
        <Link className="bg-black px-5 py-3 text-xl" to="/login">
          Login
        </Link>
        <Link className="bg-white text-black px-5 py-3 text-xl" to="/signup">
          Sign up
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
