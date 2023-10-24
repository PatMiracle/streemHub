'use client'

import NavBar from '@/components/nav'
import { useState } from 'react'
import { tags } from '@/utils/data'
import Link from 'next/link'
import { CgSearch } from 'react-icons/cg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [activeBtn, setActiveBtn] = useState(0)
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?search=${search}&category=${activeBtn}`)
  }

  return (
    <header className="relative pb-20">
      <Image
        src="/images/home/bg-moon-overlay.png"
        fill={true}
        className="absolute left-0 top-0 h-full -z-10 mix-blend-color"
        priority
        alt=""
      />
      <Image
        src="/images/home/bg-moon.png"
        fill={true}
        className="absolute left-0 top-0 h-full -z-20 animate__animated animate__fadeIn"
        priority
        alt="moon"
      />
      <NavBar />
      <div className="text-center pt-[7%] z-20">
        <h1 className="lg:text-5xl">STREEMHUB</h1>
        <div className="w-max mx-auto">
          {/* search center */}
          <div className="flex bg-purple500 mt-10">
            {tags.map((text, i) => (
              <button
                key={i}
                className={`lg:text-xl xl:text-2xl pt-3 pb-1 lg:px-7 xl:px-9 capitalize ${
                  activeBtn === i ? 'bg-purple700 font-bold text-purple500' : ''
                }`}
                onClick={() => setActiveBtn(i)}
              >
                {text}
              </button>
            ))}
          </div>
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="text"
              className="p-3 pl-10 pr-20 placeholder:text-purple-500 w-full lg:text-xl xl:text-2xl"
              placeholder={`Search ${tags[activeBtn]} here`}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="absolute right-10 top-2 text-black grid place-content-center">
              <CgSearch size={36} />
            </button>
          </form>
        </div>
        <p className="text-xl mt-5">
          Making the world a better place for teams
        </p>
        <div className="pt-20 flex gap-4 justify-center">
          <Link
            href=""
            className="lg:text-lg xl:text-xl pt-3 pb-2 lg:w-40 xl:w-44 border-2 border-solid border-purple500 bg-purple500 rounded-md"
          >
            Learn more
          </Link>
          <Link
            href="/signup"
            className="lg:text-lg xl:text-xl pt-3 pb-2 lg:w-40 xl:w-44 border-2 border-solid border-white rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
