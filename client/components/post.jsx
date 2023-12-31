'use client'

import { useState } from 'react'
import { FiShare2, FiThumbsUp } from 'react-icons/fi'
import { TbMessageCircle2 } from 'react-icons/tb'
import PostCommments from './post-comments'
import clsx from 'clsx'

const Post = ({ name, text, img }) => {
  const [isLike, setIsLike] = useState(false)
  const [showComments, setShowComments] = useState(false)
  return (
    <div>
      <div className="flex gap-9 items-center">
        <div className="w-16 h-16 bg-[#D5CECE] rounded-full"></div>
        <h2 className="font-bold lg:text-2xl xl:text-3xl">{name}</h2>
      </div>
      <div className="w-[80%] ml-[6.25rem]">
        <p className="lg:text-xl xl:text-2xl mb-9">{text}</p>
        {img && (
          <div className="w-full h-[400px] bg-[#979595] opacity-30 rounded-[30px]"></div>
        )}
        <div className="flex gap-6 ml-auto w-max py-4">
          <span className="lg:text-lg xl:text-xl flex items-end gap-2">
            <button onClick={() => setIsLike(!isLike)}>
              <FiThumbsUp
                className={clsx(
                  isLike ? 'text-purple500' : 'text-white',
                  'text-4xl'
                )}
              />
            </button>
            1000
          </span>
          <span className="lg:text-lg xl:text-xl flex items-end gap-2">
            <button onClick={() => setShowComments(!showComments)}>
              <TbMessageCircle2 className="hover:text-purple500 -scale-x-100 text-4xl" />
            </button>
            1000
          </span>
          <span className="lg:text-lg xl:text-xl flex items-end gap-2">
            <button>
              <FiShare2 className="hover:text-purple500 text-4xl" />
            </button>
            1000
          </span>
        </div>
      </div>
      {showComments && <PostCommments />}
    </div>
  )
}

export default Post
