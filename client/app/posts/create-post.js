'use client'

import { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import PostForm from '/components/post-form'

export default function CreatePost() {
  const [active, setActive] = useState(false)
  return (
    <>
      <div
        onClick={() => setActive(true)}
        className="lg:px-6 lg:py-3 xl:px-8 xl:py-5 border-4 border-purple500 drop-shadow-md lg:rounded-3xl xl:rounded-[30px] flex justify-between items-center cursor-pointer"
      >
        <div className="lg:w-9 lg:h-9 xl:w-12 xl:h-12 bg-purple500 rounded-full"></div>
        <p className="w-10/12 text-inputBg text-xl">
          Share your Problems and Ideas
        </p>
        <FaMicrophone className="text-purple500 opacity-75 lg:text-4xl xl:text-5xl" />
      </div>
      {active && (
        <>
          <div className="h-px w-full bg-purple500 my-7"></div>
          <PostForm />
        </>
      )}
    </>
  )
}
