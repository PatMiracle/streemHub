'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineGoogle } from 'react-icons/ai'
import { PasswordCheck, User } from 'iconsax-react'
import useFormError from '/hooks/useFormError'

const user_regex = /^[a-zA-Z][a-zA-Z0-9]{2,}$/

const Form = () => {
  const [username, setUsername] = useState('')
  const [password, SetPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const { formError, setFormError } = useFormError()

  // clear error as input changes
  useEffect(() => {
    setFormError(false)
  }, [username, password, setFormError])

  const handleSubmit = (e) => {
    e.preventDefault()
    // validate inputs
    if (!user_regex.test(username)) {
      setFormError(true)
    }
    if (password.length < 6) {
      setFormError(true)
    }
  }

  return (
    <>
      {formError && (
        <p className="absolute bg-[#FF1212aa] py-2 px-4 rounded-lg top-7 left-4">
          Incorrect username or password. All passwords must be at
          <br />
          least 6 Characters
        </p>
      )}
      <h2 className="font-bold text-5xl">Login</h2>
      <p className="pt-5">
        {"Don't"} have an account?
        <Link className="text-purple500" href="/signup">
          {' '}
          Sign Up
        </Link>
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border-b border-solid border-b-purple500 pt-8 pb-14"
      >
        {/* username */}
        <div className="relative">
          <User className="absolute text-black top-4 left-5" />
          <input
            type="text"
            className="w-full bg-inputBg py-4 px-16 rounded-lg"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* password */}
        <div className="relative">
          <PasswordCheck className="absolute left-5 top-4 text-black" />
          <input
            type={showPwd ? 'text' : 'password'}
            className="w-full bg-inputBg py-4 px-16 rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <span
            className="text-black absolute right-10 top-4 cursor-pointer select-none"
            onClick={() => setShowPwd(!showPwd)}
          >
            {showPwd ? 'Hide' : 'Show'}
          </span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <label htmlFor="remember" className="cursor-pointer">
            <input
              type="checkbox"
              id="remember"
              className="[&:not(input:checked)]:appearance-none rounded-sm outline-none bg-black accent-purple500 h-4 w-4 border mr-2"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me.
          </label>
          <Link className="text-purple500" href="/login/password-recovery">
            Forgot Password
          </Link>
          <button className="bg-purple500 py-1 px-4 rounded-lg">Login</button>
        </div>
      </form>
      <button className="w-[95%] mx-auto flex justify-center bg-inputBg py-3 px-2 rounded-lg text-left mt-8">
        <AiOutlineGoogle className="text-purple500" size={30} />
        <span className="font-bold text-2xl text-black inline-block w-[90%] text-center">
          Log in with Google
        </span>
      </button>
    </>
  )
}

export default Form
