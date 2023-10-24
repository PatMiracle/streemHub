'use client'

import PostsNavBar from '@/components/post-nav'
import { useState } from 'react'
import htmlFolder from '@/public/images/posts/html-folder.png'
import folderLink from '@/public/images/posts/folder-link.png'
import Image from 'next/image'

const Header = () => {
  const [search, setSearch] = useState('')

  return (
    <header className="relative w-[85%] mx-auto">
      <PostsNavBar />
      {/* banner */}
      <div
        className="pl-20 pr-10 lg:py-5 xl:py-8 mt-4 lg:rounded-[44px] xl:rounded-[52px] flex justify-between items-center"
        style={{
          background:
            'radial-gradient(73.7% 73.7% at 47.21% 26.3%, #8B0CFF 0%, #C483FF 100%)',
        }}
        role="banner"
      >
        <div className="text-black">
          <p className="lg:text-lg xl:text-xl mb-2">Discover</p>
          <h2 className="lg:text-4xl xl:text-5xl font-semibold">
            Latest News
            <br /> and Trending Post.
          </h2>
        </div>
        <div className="relative">
          <Image
            src={htmlFolder}
            alt=""
            className="lg:w-80 xl:w-[377px]"
            priority
          />
          <Image
            src={folderLink}
            alt=""
            className="lg:w-36 xl:w-[198px] absolute lg:bottom-10 lg:-left-4 xl:bottom-12 xl:-left-12"
            priority
          />
        </div>
      </div>
      {/* search bar */}
      <form
        className="flex items-center lg:gap-6 xl:gap-8 bg-white lg:rounded-3xl lg:py-5 lg:px-7 xl:rounded-[30px] xl:py-7 xl:px-10 absolute lg:-bottom-16 xl:-bottom-20 w-11/12 left-1/2 -translate-x-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <span
          className="rounded-lg lg:py-3 lg:px-4 xl:py-4 xl:px-5"
          style={{
            boxShadow: '2px 4px 18px rgba(0, 0, 0, 0.25)',
          }}
        >
          <select
            name="categories"
            id="categories"
            className="lg:w-[92px] xl:w-[110px] lg:text-sm xl:text-base cursor-pointer text-black"
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
          className="border-l-2 border-l-black lg:px-4 lg:py-3 xl:px-5 xl:py-4 flex-[50%] lg:text-lg xl:text-xl"
          placeholder="Search different categories"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="lg:text-xl xl:text-2xl font-semibold text-purple500 bg-black py-4 px-6 lg:rounded-xl xl:rounded-2xl">
          Streem Now
        </button>
      </form>
    </header>
  )
}

export default Header
