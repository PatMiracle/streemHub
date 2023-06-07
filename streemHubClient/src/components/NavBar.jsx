import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const navLinks = [
    { link: '/', text: 'home' },
    { link: '/', text: 'posts' },
    { link: '/', text: 'collab' },
    { link: '/', text: 'about' },
  ]
  return (
    <nav className="py-10 px-20 flex items-center gap-6">
      <Link to="/">
        <img src={logo} alt="logo" className="w-14" />
      </Link>
      {navLinks.map(({ link, text }, i) => (
        <Link to={link} className="text-xl capitalize" key={i}>
          {text}
        </Link>
      ))}
      <div className="ml-auto">
        <Link className="bg-black text-white px-5 py-3 text-xl">Login</Link>
        <Link className="bg-white text-black px-5 py-3 text-xl">Sign up</Link>
      </div>
    </nav>
  )
}

export default NavBar
