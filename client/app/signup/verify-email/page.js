'use client'

import Link from 'next/link'
import VerifyLayout from '/layouts/verify-layout'

const VerifyEmail = () => {
  return (
    <VerifyLayout>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h2 className="text-5xl font-bold text-left">Verify your email</h2>
        <p className="text-xl py-6">
          Please enter the 4 digit code sent to yourmail@example.com
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-5">
            <input
              type="text"
              className="bg-[#D9D9D9] text-2xl text-center py-5 w-[131px] rounded-lg"
              maxLength={1}
            />
            <input
              type="text"
              className="bg-[#D9D9D9] text-2xl text-center py-5 w-[131px] rounded-lg"
              maxLength={1}
            />
            <input
              type="text"
              className="bg-[#D9D9D9] text-2xl text-center py-5 w-[131px] rounded-lg"
              maxLength={1}
            />
            <input
              type="text"
              className="bg-[#D9D9D9] text-2xl text-center py-5 w-[131px] rounded-lg"
              maxLength={1}
            />
          </div>
          <button type="button" className="text-purple500 text-2xl pt-14 pb-7">
            Resend Code
          </button>
          <button className="font-bold bg-purple500 block text-2xl w-[580px] py-4 rounded-lg">
            Confirm
          </button>
        </form>
        <Link
          href="/signup"
          className="text-purple500 text-2xl pt-4 block text-center underline"
        >
          Change Email
        </Link>
      </div>
    </VerifyLayout>
  )
}

export default VerifyEmail
