import { BsDot } from 'react-icons/bs'
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'

const PostComment = () => {
  return (
    <div className="py-8 border-b border-b-solid border-b-purple500">
      <div className="flex gap-7 items-center">
        {/* placeholder img */}
        <div className="w-16 h-16 bg-[#D5CECE] rounded-full"></div>
        <h2 className="font-bold text-2xl">
          Mark Hamilton <BsDot className="inline text-purple500" />{' '}
          <span className="text-xs font-light">1h ago</span>
        </h2>
      </div>
      <div className="ml-[5.75rem]">
        <p className="text-xl">
          “The sad thing about artificial intelligence is that it lacks artifice
          and therefore intelligence.” “Forget artificial intelligence – in the
          brave new world of big data, it's artificial idiocy we should be
          looking out for.” “Before we work on artificial intelligence why don't
          we do something about natural stupidity?”
        </p>
        <div className="pt-10 flex items-end gap-3">
          <span>
            <button className="text-sm">Reply</button>{' '}
            <BsDot className="inline text-purple500" />{' '}
            <button className="text-sm">Share</button>
          </span>
          <button>
            <FiThumbsUp className="text-white" size={26} />
          </button>
          <button>
            <FiThumbsDown className="text-white" size={26} />
          </button>
          <span className="text-sm ml-3">2 likes</span>
        </div>
      </div>
    </div>
  )
}

export default PostComment
