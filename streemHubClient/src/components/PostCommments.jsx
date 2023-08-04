import PostComment from './PostComment'
import { Image } from 'iconsax-react'

const PostCommments = () => {
  return (
    <div className="w-[80%] mx-auto py-28 px-20">
      <div className="h-[1px] w-full bg-purple500"></div>
      {/* add comment */}
      <form className="grid gap-8 py-8">
        <button className="w-max ml-auto flex items-center gap-4">
          Add images{' '}
          <span className="border rounded-md border-purple500 h-9 w-10 inline-grid place-content-center">
            <Image color="#8B0CFF" size={20} variant="Bold" />
          </span>
        </button>
        <div className="flex gap-8">
          {/* placeholder img */}
          <div className="w-16 h-16 bg-[#D5CECE] rounded-full"></div>
          <textarea
            name=""
            id=""
            className="bg-black border border-solid border-purple500 rounded-3xl resize-none w-[88%] h-56 px-10 py-8 text-white placeholder:text-white"
            placeholder="Add a comment ........"
          ></textarea>
        </div>
        <button className="bg-purple500 py-5 px-8 font-bold text-white rounded-lg w-max ml-auto text-2xl">
          Post
        </button>
      </form>
      <PostComment />
    </div>
  )
}

export default PostCommments
