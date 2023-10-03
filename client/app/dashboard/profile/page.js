import { Edit2, Edit, Camera, VideoCircle, Message, Trash } from 'iconsax-react'
import { BsDot } from 'react-icons/bs'
import { FaMicrophone, FaEllipsisH } from 'react-icons/fa'
import { Refresh } from 'iconsax-react'
import { FiShare2, FiThumbsUp } from 'react-icons/fi'
import { TbMessageCircle2 } from 'react-icons/tb'

export const metadata = {
  title: 'Profile',
}

const Profile = () => {
  return (
    <>
      <section>
        <div className="relative">
          <div className="bg-inputBg w-full h-56 rounded-lg"></div>
          <button className="absolute bottom-3 right-5 bg-[#0000007a] py-1 px-3 rounded-md">
            Edit Cover photo <Edit className="inline" />
          </button>
        </div>
        <div className="px-10 relative">
          <div className="bg-purple500 w-[150px] h-[150px] rounded-full absolute -top-20"></div>
          <button className="h-10 w-10 rounded-full bg-inputBg grid place-content-center absolute left-[150px] top-5">
            <Edit2 color="#000" />
          </button>
          <div className="py-20 max-w-lg">
            <div className="flex items-center gap-2">
              <h3>Bob Willer</h3>
              <BsDot className="text-purple500" size={44} />
              <span className="opacity-50">Frontend Web Developer </span>
              <Edit2 className="inline text-purple500" />
            </div>
            <p className="opacity-50">
              I am a dedicated and passionate frontend developer, constantly
              pushing the boundaries of what is possible in web development.
            </p>
            <div className="flex gap-5 pt-9 pb-5">
              <span className="border border-purple500 px-3 py-1 rounded-lg">
                HTML
              </span>
              <span className="border border-purple500 px-3 py-1 rounded-lg">
                CSS
              </span>
              <span className="border border-purple500 px-3 py-1 rounded-lg">
                JavaScript
              </span>
              <span className="border border-purple500 px-3 py-1 rounded-lg">
                React
              </span>
            </div>
            <p className="opacity-50">Joined August 2022</p>
            <p className="flex gap-5 pt-3">
              <span>
                30 <span className="opacity-50">followers</span>
              </span>
              <span>
                10 <span className="opacity-50">following</span>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between ">
          <div className="relative w-9/12">
            <input
              type="text"
              className="w-full bg-black border-4 border-purple500 py-5 px-8 rounded-[30px] outline-0 text-xl text-white"
              placeholder="Share your Problems and Ideas"
            />
            <button>
              <FaMicrophone
                size={32}
                className="text-purple500 absolute right-8 bottom-6"
              />
            </button>
          </div>
          <div className="flex gap-3">
            <div className="w-14 h-14 border border-purple500 rounded-md grid place-content-center">
              <Camera size={36} className="text-purple500" />
            </div>
            <div className="w-14 h-14 border border-purple500 rounded-md grid place-content-center">
              <VideoCircle size={32} className="text-purple500" />
            </div>
            <div className="w-14 h-14 border border-purple500 rounded-md grid place-content-center">
              <Message size={36} className="text-purple500" />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-purple500 mt-12 mb-9"></div>
      </section>
      {/* PERSONAL POSTS FROM PROFILE */}
        <div className='w-[95%] my-14 mx-auto gap-4 flex flex-row justify-between'>
          <div className="w-14 h-14 bg-[white] rounded-full px-8 py-8"></div>
          <div className='flex flex-col gap-[0.5em]'>
            <h2 className=' text-[2rem]'>Bob Miller</h2>
            <p>Can you make changes to a product which other developers have already started?</p>
            <div className=' bg-[#2d2d2d] w-[800px] h-[250px] rounded-3xl'></div>
            <div className='flex self-end items-center gap-4 py-2'>
              <span className='flex items-center gap-2'>
                <button>
                  <Refresh className='text-purple500' size={27} />
                </button>
                1000
              </span>
              <span className='flex items-center gap-2'>
                <button>
                  <FiThumbsUp className='text-purple500' size={27} />
                  </button>
                  1000
              </span>
              <span className='flex items-center gap-2'>
                <button>
                  <TbMessageCircle2 className='text-purple500' size={27} />
                </button>
                1000
              </span>
              <span className='flex items-center gap-2'>
                <button>
                  <FiShare2 className='text-purple500' size={27} />
                </button>
                1000
              </span>
          </div>
          </div>        
          <div className='flex flex-col items-end gap-2 mt-12'>
            <button><FaEllipsisH className='text-purple500' size={30} /></button>
            <button className='flex items-center gap-2 border-[1px] border-purple500 outline-0 rounded-[10px] p-[0.75em]'>
              <span className='text-sm'>Delete Post</span>
              <span><Trash /></span>
            </button>
        </div>
      </div>
      
      {/* DELETE CONFIRMATION */}

      <div className='flex flex-col justify-center items-center fixed top-0 right-0 w-screen h-screen z-[100]'>
        <div className='fixed top-0 left-0 w-screen h-screen z-[-1] bg-[#00000080] backdrop-filter'></div>
          <div className='flex flex-col items-center text-center gap-4 w-[300px] h-[290px] rounded-2xl p-6 bg-white text-black'>
            <Trash className='text-purple500' size={70} />
            <p className='text-xl max-w-[250px]'>Are you sure you want to delete this post?</p>
            <small className='text-xs'>You will not be able to recover it afterwards</small>
            <div className='flex gap-4'>
              <button className='px-6 py-2 bg-purple500 text-white text-base font-[600] tracking-wider rounded-lg border-transparent outline-0'>Delete</button>
              <button className='px-6 py-2 bg-transparent text-purple500 text-base font-[600] tracking-wider rounded-lg border-purple500 border-[2px] outline-0'>Cancel</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile
