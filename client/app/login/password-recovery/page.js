'use client'

import AuthLayout from '/layouts/auth-layout'
import img from '/public//images/login-img.png'
import { User } from 'iconsax-react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/

const Login = () => {
  const [email, setEmail] = useState('')
  const inpRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    inpRef.current.style.color = 'black'
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email_regex.test(email)) {
      router.push(`/login/check-email?email=${email}`)
    } else {
      inpRef.current.focus()
      inpRef.current.style.color = '#FF1212aa'
    }
  }

  return (
    <AuthLayout img={img}>
      <form onSubmit={handleSubmit} className="grid gap-5">
        <h1 className="font-bold">Password recovery</h1>
        <p>Enter your email to recover your password</p>
        <div className="relative">
          <User className="absolute text-black top-4 left-5" />
          <input
            type="text"
            className="w-full bg-inputBg py-4 px-16 rounded-lg"
            placeholder="input your account email"
            onChange={(e) => setEmail(e.target.value)}
            ref={inpRef}
          />
        </div>
        <button className="bg-purple500 text-lg px-4 py-2 rounded-lg w-max ml-auto">
          Recover password
        </button>
      </form>
    </AuthLayout>
  )
}

export default Login
