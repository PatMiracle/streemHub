import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [agreement, setAgreement] = useState(false)
  const [formError, setFormError] = useState(false)

  // clear error as input changes
  useEffect(() => {
    setFormError(false)
  }, [firstName, lastName, email, password])

  const name_regex = /^[A-Za-z]+$/
  const email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/

  const handleSubmit = (e) => {
    e.preventDefault()
    // validate inputs
    if (
      !name_regex.test(firstName) ||
      !name_regex.test(lastName) ||
      !email_regex.test(email)
    ) {
      setFormError(true)
    }
    if (password.length < 6) {
      setFormError(true)
    }
  }

  return (
    <section className="flex gap-[10%]">
      <img
        src="/signup-img.png"
        alt=""
        className="min-h-screen object-cover w-[40%]"
      />
      <div className="pt-20 w-[40%] relative">
        {formError && (
          <p className="absolute bg-[#FF1212aa] py-2 px-4 rounded-lg top-7 left-4 backdrop-blur-md">
            Incorrect name, email or password. All passwords must be at
            <br />
            least 6 Characters
          </p>
        )}
        <h2 className="font-bold text-5xl">Sign Up</h2>
        <p className="pt-5">
          Already have an account?
          <Link className="text-purple500" to="/login">
            {' '}
            Login
          </Link>
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border-b border-solid border-b-purple500 pt-8 pb-14"
        >
          <div className="flex gap-5">
            {/* first Name */}
            <input
              type="text"
              className="w-full bg-inputBg py-4 px-10 rounded-lg"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* last Name */}
            <input
              type="text"
              className="w-full bg-inputBg py-4 px-10 rounded-lg"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* email */}
          <input
            type="text"
            className="w-full bg-inputBg py-4 px-10 rounded-lg"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* password */}
          <div className="relative">
            <img
              src="/passwordcheck.svg"
              alt=""
              className="absolute left-5 top-4"
            />
            <input
              type={showPwd ? 'text' : 'password'}
              className="w-full bg-inputBg py-4 px-16 rounded-lg"
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
            <label htmlFor="agree" className="cursor-pointer">
              <input
                type="checkbox"
                id="agree"
                className="[&:not(input:checked)]:appearance-none rounded-sm outline-none bg-black accent-purple500 h-4 w-4 border mr-2"
                onChange={(e) => setAgreement(e.target.checked)}
              />
              I Agree with{' '}
              <Link className="text-purple500" to="/login">
                {' '}
                Privacy
              </Link>{' '}
              and
              <Link className="text-purple500" to="/login">
                {' '}
                Policy
              </Link>
            </label>
            <button className="bg-purple500 py-2 px-5 rounded-lg text-xl">
              Sign Up
            </button>
          </div>
        </form>
        <button className="w-[95%] mx-auto flex justify-center bg-inputBg py-3 px-2 rounded-lg text-left mt-8">
          <AiOutlineGoogle className="text-purple500" size={30} />
          <span className="font-bold text-2xl text-black inline-block w-[90%] text-center">
            Sign Up with Google
          </span>
        </button>
      </div>
    </section>
  )
}

export default SignUp