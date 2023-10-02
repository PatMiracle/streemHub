'use client'

import { useState } from 'react'
import { FiShare2, FiThumbsUp } from 'react-icons/fi'
import { TbMessageCircle2 } from 'react-icons/tb'
import PostCommments from '/components/post-comments'

const Post = ({ name, text, img }) => {
  const [isLike, setIsLike] = useState(false)
  const [showComments, setShowComments] = useState(false)

  return (
    <div>
      <div className="flex gap-9 items-center">
        <div className="w-28 h-28 bg-[#D5CECE] rounded-full"></div>
        <h2 className="font-bold text-4xl">{name}</h2>
      </div>
      <div className="w-[80%] ml-36">
        <p className="text-3xl mb-9">{text}</p>
        {img && (
          <div className="w-full h-[500px] bg-[#979595] opacity-30 rounded-[30px]"></div>
        )}
        <div className="flex gap-6 ml-auto w-max py-4">
          <span className="text-xl flex items-end gap-2">
            <button onClick={() => setIsLike(!isLike)}>
              <FiThumbsUp
                className={isLike ? 'text-purple500' : 'text-white'}
                size={40}
              />
            </button>
            1000
          </span>
          <span className="text-xl flex items-end gap-2">
            <button onClick={() => setShowComments(!showComments)}>
              <TbMessageCircle2
                className="hover:text-purple500 -scale-x-100"
                size={40}
              />
            </button>
            1000
          </span>
          <span className="text-xl flex items-end gap-2">
            <button>
              <FiShare2 className="hover:text-purple500" size={40} />
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
