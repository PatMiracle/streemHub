'use client'

import NavBar from '/components/nav'
import React, { useState } from 'react'
import Link from 'next/link'
import searchIcon from '/public/vectors/search.svg'
import Image from 'next/image'
import clsx from 'clsx'

const Header = () => {
  const searchBtns = [
    'books',
    'projects',
    'research works',
    'articles',
    'codes',
    'links',
  ]
  const [activeBtn, setActiveBtn] = useState(0)
  const [search, setSearch] = useState('')

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
        className="absolute left-0 top-0 h-full -z-20"
        priority
        alt="moon"
      />
      <NavBar />
      <div className="text-center pt-[7%] z-20">
        <h1>STREEMHUB</h1>
        <div className="w-max mx-auto">
          {/* search center */}
          <div className="flex bg-purple500 mt-10">
            {searchBtns.map((text, i) => (
              <button
                key={i}
                className={`text-2xl pt-3 pb-1 lg:px-7 xl:px-9 capitalize ${
                  activeBtn === i ? 'bg-purple700 font-bold text-purple500' : ''
                }`}
                onClick={() => setActiveBtn(i)}
              >
                {text}
              </button>
            ))}
          </div>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="p-3 px-10 placeholder:text-purple-500 w-full text-2xl"
              placeholder={`Search ${searchBtns[activeBtn]} here`}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="absolute right-3 top-2">
              <Link href='./search'>
                  <Image src={searchIcon} alt="" />
              </Link>
            </button>
          </form>
        </div>
        <p className="text-xl mt-5">
          Making the world a better place for teams
        </p>
        <div className="pt-20 flex gap-4 justify-center">
          <Link
            href=""
            className="text-xl pt-3 pb-2 w-44 border-2 border-solid border-purple500 bg-purple500 rounded-md"
          >
            Learn more
          </Link>
          <Link
            href="/signup"
            className="text-xl pt-3 pb-2 w-44 border-2 border-solid border-white rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
