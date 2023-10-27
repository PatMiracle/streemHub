'use client'

import VerifyLayout from 'layouts/verify-layout'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const CheckEmail = () => {
  const router = useRouter()
  const email = useSearchParams().get('email')

  useEffect(() => {
    if (!email) {
      router.push('/login')
    }
  }, [email, router])

  return (
    <VerifyLayout>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h2 className="text-5xl font-bold text-left">Check your email</h2>
        <p className="text-xl py-6">
          Please enter the 4 digit code sent to {email}
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-5">
            <input
              type="text"
              className="bg-inputBg text-2xl text-center py-5 w-[131px] rounded-lg outline-4 outline-inputBg focus-within:outline-purple500"
              maxLength={1}
            />
            <input
              type="text"
              className="bg-inputBg text-2xl text-center py-5 w-[131px] rounded-lg outline-4 outline-inputBg focus-within:outline-purple500"
              maxLength={1}
            />
            <input
              type="text"
              className="bg-inputBg text-2xl text-center py-5 w-[131px] rounded-lg outline-4 outline-inputBg focus-within:outline-purple500"
              maxLength={1}
            />
            <input
              type="text"
              className="bg-inputBg text-2xl text-center py-5 w-[131px] rounded-lg outline-4 outline-inputBg focus-within:outline-purple500"
              maxLength={1}
            />
          </div>
          <div className=" flex justify-between pt-14 pb-7">
            <button type="button" className="text-purple500 text-2xl">
              Resend Code
            </button>
            <p type="button" className="text-purple500 text-2xl">
              code expires in <span className="text-white">03:12</span>
            </p>
          </div>
          <button className="font-bold bg-purple500 block text-2xl w-[580px] py-4 rounded-lg">
            Confirm
          </button>
        </form>
      </div>
    </VerifyLayout>
  )
}

export default CheckEmail
