'use client'

import { Refresh, Trash } from 'iconsax-react'
import { FiShare2, FiThumbsUp } from 'react-icons/fi'
import { TbMessageCircle2 } from 'react-icons/tb'
import { FaEllipsisH } from 'react-icons/fa'

export default function Post({
  data,
  toggleDropDown,
  dropDownOpen,
  deletePost,
}) {
  const { img, text } = data

  return (
    <div className="w-[95%] my-14 mx-auto flex flex-row gap-4 items-start">
      <div className="w-14 h-14 bg-inputBg rounded-full px-8 py-8"></div>
      <div className="flex flex-col gap-[0.5em] w-9/12">
        <h2 className=" text-[2rem]">Bob Miller</h2>
        <p>{text}</p>
        {img && (
          <div className=" bg-[#2d2d2d] w-full h-[250px] rounded-3xl"></div>
        )}
        <div className="flex self-end items-center gap-4 py-2">
          <span className="flex items-center gap-2">
            <button>
              <Refresh className="text-purple500" size={27} />
            </button>
            1000
          </span>
          <span className="flex items-center gap-2">
            <button>
              <FiThumbsUp className="text-purple500" size={27} />
            </button>
            1000
          </span>
          <span className="flex items-center gap-2">
            <button>
              <TbMessageCircle2 className="text-purple500" size={27} />
            </button>
            1000
          </span>
          <span className="flex items-center gap-2">
            <button>
              <FiShare2 className="text-purple500" size={27} />
            </button>
            1000
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 mt-12 ml-auto">
        <button onClick={toggleDropDown}>
          <FaEllipsisH className="text-purple500" size={30} />
        </button>
        {dropDownOpen && (
          <button
            onClick={deletePost}
            className="flex items-center gap-2 border-[1px] border-purple500 outline-0 rounded-[10px] p-[0.75em]"
          >
            <span className="text-sm">Delete Post</span>
            <span>
              <Trash />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
