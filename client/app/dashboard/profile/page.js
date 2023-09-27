import { Edit2, Edit, Camera, VideoCircle, Message } from 'iconsax-react'
import { BsDot } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'

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
              className="w-full bg-black border-4 border-purple500 py-5 px-8 rounded-[30px] text-xl text-white"
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
        <div></div>
      </section>
    </>
  )
}

export default Profile
