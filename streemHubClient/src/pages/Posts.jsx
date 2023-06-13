import React, { useState } from 'react'
import PostsNavBar from '../components/PostsNavBar'
import Footer from '../components/Footer'
import { FaMicrophone } from 'react-icons/fa'
import Post from '../components/Post'
import { posts } from '../utils/data'

const Posts = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <header className="relative px-20">
        <PostsNavBar />
        {/* banner */}
        <div
          className="px-24 py-8 rounded-[52px] flex justify-between items-center"
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
            <img
              src="/html-folder.png"
              alt="html-folder"
              className="w-[377px]"
            />
            <img
              src="/folder-link.png"
              alt="folder-link"
              className="w-[198px] absolute bottom-12 -left-12"
            />
          </div>
        </div>
        {/* search bar */}
        <form
          className="flex items-center gap-8 bg-white rounded-[30px] py-7 px-10 absolute -bottom-20 w-[75%] left-1/2 -translate-x-1/2"
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
      <main className="px-20 py-48">
        <div className="px-10 py-5 border-4 border-purple500 drop-shadow-md rounded-[30px] flex justify-between">
          <div className="w-14 h-14 bg-purple500 rounded-full"></div>
          <FaMicrophone className="text-purple500 opacity-75" size={56} />
        </div>
        {/* posts */}
        <section className="pt-24 pb-10">
          {posts.map(({ id, name, text, img }) => (
            <Post key={id} name={name} text={text} img={img} />
          ))}
        </section>
        <div className="flex w-max gap-6 ml-auto mr-[9%]">
          <div className="w-5 h-5 bg-purple500 rounded-full"></div>
          <div className="w-5 h-5 bg-purple500 rounded-full opacity-60"></div>
          <div className="w-5 h-5 bg-purple500 rounded-full opacity-50"></div>
          <div className="w-5 h-5 bg-purple500 rounded-full opacity-30"></div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Posts
