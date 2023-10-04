import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  const navLinks = [
    { link: '/', text: 'home' },
    { link: '/posts', text: 'posts' },
    { link: '/', text: 'collab' },
    { link: '/', text: 'about' },
  ]
  return (
    <nav className="flex gap-6 items-center w-[85%] mx-auto pt-[4%] pb-[3%]">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={56}
          height={54}
          priority
          className="w-auto h-auto"
        />
      </Link>
      {navLinks.map(({ link, text }, i) => (
        <Link
          href={link}
          className="lg:text-lg xl:text-xl capitalize hover:text-gray-100"
          key={i}
        >
          {text}
        </Link>
      ))}
      <div className="ml-auto">
        <Link
          className="bg-black px-5 py-3 lg:text-lg xl:text-xl"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="bg-white text-black px-5 py-3 lg:text-lg xl:text-xl"
          href="/signup"
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
