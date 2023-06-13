import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { FaSearch } from 'react-icons/fa'

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
    <>
      <header className="">
        <NavBar />
        <div className="text-center mt-28 mb-5">
          <h2 className="text-6xl font-extrabold mb-10">STREEMHUB</h2>
          {/* search center */}
          <div className="w-max mx-auto">
            <div className="flex bg-purple500">
              {searchBtns.map((text, i) => (
                <button
                  key={i}
                  className={`text-2xl font-bold py-2 px-5 text-white capitalize ${
                    activeBtn === i && 'bg-purple-800'
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
                className="p-3 pr-10 placeholder:text-purple-500 w-full text-2xl"
                placeholder={`search for ${searchBtns[activeBtn]}`}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="absolute right-3 top-4">
                <FaSearch size={24} />
              </button>
            </form>
          </div>
        </div>
      </header>
      <main></main>
      <Footer />
    </>
  )
}

export default Home
