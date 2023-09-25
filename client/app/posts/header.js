'use client'

import PostsNavBar from '/components/post-nav'
import { useState } from 'react'
import htmlFolder from '/public/images/posts/html-folder.png'
import folderLink from '/public/images/posts/folder-link.png'
import Image from 'next/image'

const Header = () => {
  const [search, setSearch] = useState('')

  return (
    <header className="relative w-[85%] mx-auto">
      <PostsNavBar />
      {/* banner */}
      <div
        className="pl-20 pr-10 py-8 mt-4 rounded-[52px] flex justify-between items-center"
        style={{
          background:
            'radial-gradient(73.7% 73.7% at 47.21% 26.3%, #8B0CFF 0%, #C483FF 100%)',
        }}
        role="banner"
      >
        <div className="text-black">
          <p className="text-xl mb-2">Discover</p>
          <h2 className="text-5xl font-semibold">
            Latest News
            <br /> and Trending Post.
          </h2>
        </div>
        <div className="relative">
          <Image src={htmlFolder} alt="" className="w-[377px]" />
          <Image
            src={folderLink}
            alt=""
            className="w-[198px] absolute bottom-12 -left-12"
          />
        </div>
      </div>
      {/* search bar */}
      <form
        className="flex items-center gap-8 bg-white rounded-[30px] py-7 px-10 absolute -bottom-20 w-11/12 left-1/2 -translate-x-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <span
          className="rounded-lg py-4 px-5"
          style={{
            boxShadow: '2px 4px 18px rgba(0, 0, 0, 0.25)',
          }}
        >
          <select
            name="categories"
            id="categories"
            className="w-[110px] cursor-pointer text-black"
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
          className="border-l-2 border-l-black px-5 py-4 flex-[50%] text-xl"
          placeholder="Search different categories"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="text-2xl font-semibold text-purple500 bg-black py-4 px-6 rounded-2xl">
          Streem Now
        </button>
      </form>
    </header>
  )
}

export default Header
