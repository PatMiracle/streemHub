'use client'

import AuthLayout from '/layouts/auth-layout'
import img from '/public//images/login-img.png'
import { PasswordCheck } from 'iconsax-react'
import { useState } from 'react'

const ChangePassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPswd, setConfirmPswd] = useState('')

  return (
    <AuthLayout img={img}>
      <form>
        <h1 className="text-5xl font-bold">Change your password</h1>
        <p className="pt-5 pb-8">Enter your new password here</p>
        <div className="relative mb-5">
          <PasswordCheck className="absolute left-5 top-4 text-black" />
          <input
            type="password"
            className="w-full bg-inputBg py-4 px-16 rounded-lg"
            placeholder="New Paswword"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="relative">
          <PasswordCheck className="absolute left-5 top-4 text-black" />
          <input
            type="password"
            className="w-full bg-inputBg py-4 px-16 rounded-lg"
            placeholder="Confirm Paswword"
            onChange={(e) => setConfirmPswd(e.target.value)}
          />
        </div>
        <button className="bg-purple500 block mt-9 text-lg px-4 py-2 rounded-lg w-max ml-auto">
          Change password
        </button>
      </form>
    </AuthLayout>
  )
}

export default ChangePassword
