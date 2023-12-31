'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineGoogle } from 'react-icons/ai'
import { PasswordCheck } from 'iconsax-react'
import useFormError from 'lib/hooks/useFormError'

const name_regex = /^[A-Za-z]+$/
const email_regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [agreement, setAgreement] = useState(false)
  const { formError, setFormError, resetFormError } = useFormError()

  // clear error as input changes
  useEffect(() => {
    resetFormError()
  }, [firstName, lastName, email, password])

  function validateInputs() {
    let err = ''

    if (!firstName) {
      err += 'Firstname is required, '
    } else if (!name_regex.test(firstName)) {
      err += 'Firstname is not valid, '
    }

    if (!lastName) {
      err += 'Lastname is required, '
    } else if (!name_regex.test(lastName)) {
      err += 'Lastname is not valid, '
    }

    if (!email) {
      err += 'Email is required, '
    } else if (!email_regex.test(email)) {
      err += 'Invalid email, '
    }

    if (password.length < 6) {
      err += 'All passwords must be atleast 6 Characters'
    }
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const inpErr = validateInputs()
    setFormError(inpErr)
    if (inpErr) {
      return
    }
  }

  return (
    <>
      {formError && (
        <p className="absolute bg-[#FF1212aa] py-2 px-4 rounded-lg top-7 left-4 backdrop-blur-md">
          {formError}
        </p>
      )}
      <h2 className="font-bold text-5xl">Sign Up</h2>
      <p className="pt-5">
        Already have an account?
        <Link className="text-purple500" href="/login">
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* last Name */}
          <input
            type="text"
            className="w-full bg-inputBg py-4 px-10 rounded-lg"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {/* email */}
        <input
          type="text"
          className="w-full bg-inputBg py-4 px-10 rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
          <label htmlFor="agree" className="cursor-pointer">
            <input
              type="checkbox"
              id="agree"
              className="[&:not(input:checked)]:appearance-none rounded-sm outline-none bg-black accent-purple500 h-4 w-4 border mr-2"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
            />
            I Agree with{' '}
            <Link className="text-purple500" href="/login">
              {' '}
              Privacy
            </Link>{' '}
            and
            <Link className="text-purple500" href="/login">
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
    </>
  )
}

export default Form
