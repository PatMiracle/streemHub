import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
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
    <div className="homepage">
      <header className="min-h-screen relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url(/bg-moon.png)] after:bg-cover after:bg-no-repeat after:-z-20 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url(/bg-moon-overlay.png)] before:mix-blend-color before:-z-10">
        <NavBar />
        <div className="text-center pt-28 z-20">
          <h2 className="text-6xl font-extrabold mb-10">STREEMHUB</h2>
          <div className="w-max mx-auto">
            {/* search center */}
            <div className="flex bg-purple500">
              {searchBtns.map((text, i) => (
                <button
                  key={i}
                  className={`text-2xl pt-3 pb-1 px-10 text-white capitalize ${
                    activeBtn === i && 'bg-purple700 font-bold'
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
                <img src="/search.svg" alt="" />
              </button>
            </form>
          </div>
          <p className="text-xl mt-5">
            Making the world a better place for teams
          </p>
          <div className="pt-20 flex gap-4 justify-center">
            <Link
              to=""
              className="text-xl pt-3 pb-2 w-44 border-2 border-solid border-purple500 bg-purple500 rounded-md"
            >
              Learn more
            </Link>
            <Link
              to="/signup"
              className="text-xl pt-3 pb-2 w-44 border-2 border-solid border-white rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main></main>
      <Footer />
    </div>
  )
}

export default Home
