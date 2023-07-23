import React from 'react'
import { Link } from 'react-router-dom'
import verifiedImg from '../assets/images/verify_img.png'
import { Verify } from 'iconsax-react'

const Verified = () => {
  return (
    <main>
      <img src={verifiedImg} alt="" className="fixed h-screen top-0 left-0" />
      <div className="w-[502px] bg-white rounded-lg flex flex-col items-center justify-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] py-20">
        <Verify size="114" color="#8B0CFF" variant="Bold" />
        <h2 className="text-black text-5xl font-bold mt-4">Verified!</h2>
        <p className="text-black mt-5 mb-11">
          You have successfully verified the account
        </p>
        <Link
          to="/profile"
          className="font-bold bg-purple500 block w-[222px] py-4 rounded-lg text-center"
        >
          Go to Profile
        </Link>
      </div>
    </main>
  )
}

export default Verified
