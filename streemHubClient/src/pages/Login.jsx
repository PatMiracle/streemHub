import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, SetPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const [formError, setFormError] = useState(false)

  // clear error as input changes
  useEffect(() => {
    setFormError(false)
  }, [username, password])

  const user_regex = /^[a-zA-Z][a-zA-Z0-9]{2,}$/

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
    <main className="flex gap-40">
      <img
        src="/login-img.png"
        alt=""
        className="min-h-screen object-cover w-[40%]"
      />
      <div className="pt-28 w-[40%] relative">
        {formError && (
          <p className="absolute bg-[#FF1212aa] py-2 px-4 rounded-lg top-7 left-4">
            Incorrect username or password. All passwords must be at
            <br />
            least 6 Characters
          </p>
        )}
        <h2 className="font-bold text-5xl">Login</h2>
        <p className="pt-5">
          Don't have an account?
          <Link className="text-purple500" to="/signup">
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
            <img
              src="/user.svg"
              alt=""
              className="absolute text-black top-4 left-5"
            />
            <input
              type="text"
              className="w-full bg-[#D9D9D9] py-4 px-16 rounded-lg"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="relative">
            <img
              src="/passwordcheck.svg"
              alt=""
              className="absolute left-5 top-4"
            />
            <input
              type={showPwd ? 'text' : 'password'}
              className="w-full bg-[#D9D9D9] py-4 px-16 rounded-lg"
              placeholder="Password"
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
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me.
            </label>
            <Link className="text-purple500">Forgot Password</Link>
            <button className="bg-purple500 py-1 px-4 rounded-lg">Login</button>
          </div>
        </form>
        <button className="w-[95%] mx-auto flex justify-center bg-[#D9D9D9] py-3 px-2 rounded-lg text-left mt-8">
          <AiOutlineGoogle className="text-purple500" size={30} />
          <span className="font-bold text-2xl text-black inline-block w-[90%] text-center">
            Log in with Google
          </span>
        </button>
      </div>
    </main>
  )
}

export default Login
