'use client'

import CreatePost from './create-post'
import Post from 'components/post'
import { posts } from 'lib/data'

const Main = () => {
  return (
    <main className="lg:py-40 xl:py-48 w-[85%] mx-auto">
      <CreatePost />
      {/* posts */}
      <section className="pt-24 pb-10">
        {posts.map((data, i) => (
          <Post key={i} {...data} />
        ))}
      </section>
      <div className="flex w-max gap-6 ml-auto mr-[9%]">
        <div className="w-5 h-5 bg-purple500 rounded-full"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-60"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-50"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-30"></div>
      </div>
    </main>
  )
}

export default Main
