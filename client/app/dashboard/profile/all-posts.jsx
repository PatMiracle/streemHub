'use client'

import { useState } from 'react'
import { posts as data } from 'lib/data'
import { Trash } from 'iconsax-react'
import Post from './post'

export default function AllPosts() {
  const [posts, setPosts] = useState(data)
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [activeDropDown, setActiveDropDown] = useState(null)
  const [deleteFlag, setDeleteFlag] = useState(false)

  const toggleDropDown = (id) => {
    if (id == activeDropDown) {
      setDropDownOpen(!dropDownOpen)
    } else {
      setActiveDropDown(id)
    }
  }

  const deletePost = () => {
    const newPosts = posts.filter(({ id }) => id !== activeDropDown)
    setPosts(newPosts)
    setDeleteFlag(false)
  }

  const cancelDelete = () => {
    setDeleteFlag(false)
    setDropDownOpen(false)
    setActiveDropDown(null)
  }

  return (
    <>
      <section>
        {posts.length ? (
          posts.map((data) => {
            return (
              <Post
                key={data.id}
                data={data}
                toggleDropDown={() => toggleDropDown(data.id)}
                dropDownOpen={data.id === activeDropDown && dropDownOpen}
                deletePost={() => setDeleteFlag(true)}
              />
            )
          })
        ) : (
          <p className="text-center text-grey text-lg pb-4">No Posts Yet</p>
        )}
      </section>
      {deleteFlag && (
        <DeletePost deletePost={deletePost} cancel={cancelDelete} />
      )}
    </>
  )
}

function DeletePost({ deletePost, cancel }) {
  return (
    <div className="flex flex-col justify-center items-center fixed top-0 right-0 w-screen h-screen z-[100]">
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] bg-[#00000080] backdrop-blur"></div>
      <div className="flex flex-col items-center text-center gap-4 w-96 rounded-2xl p-7 bg-white text-black">
        <Trash className="text-purple500" size={70} />
        <strong className="text-xl max-w-[250px]">
          Are you sure you want to delete this post?
        </strong>
        <small className="text-xs">
          You will not be able to recover it afterwards
        </small>
        <div className="flex gap-4">
          <button
            onClick={deletePost}
            className="px-6 py-2 bg-purple500 text-white text-base font-[600] tracking-wider rounded-lg border-transparent outline-0"
          >
            Delete
          </button>
          <button
            onClick={cancel}
            className="px-6 py-2 bg-transparent text-purple500 text-base font-[600] tracking-wider rounded-lg border-purple500 border-[2px] outline-0"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
