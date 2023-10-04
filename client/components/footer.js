'use client'

import React, { useEffect, useRef, useState } from 'react'
import footerLinks from '/utils/footer-links'
import Link from 'next/link'

const email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const Footer = () => {
  const [email, setEmail] = useState('')
  const emailRef = useRef(null)

  //   clear emailRef when email changes
  useEffect(() => {
    emailRef.current.textContent = ''
  }, [email])

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // validate email
    if (!email.match(email_regex)) {
      emailRef.current.textContent = 'invalid email'
    } else {
      emailRef.current.textContent = 'subscribed'
    }
  }

  return (
    <footer>
      <div className="py-[10%] flex justify-between w-10/12 mx-auto">
        {footerLinks.map(({ category, list }, i) => {
          return (
            <div key={i}>
              <h3 className="font-bold uppercase lg:text-xl xl:text-2xl">
                {category}
              </h3>
              <ul className="flex flex-col gap-6 pt-6 capitalize">
                {list.map(({ text, url }, i) => (
                  <Link
                    key={i}
                    className="lg:text-lg xl:text-xl hover:text-purple500 hover:font-medium"
                    href={url}
                  >
                    {text}
                  </Link>
                ))}
              </ul>
            </div>
          )
        })}
        <div>
          <h3 className="font-bold uppercase lg:text-xl xl:text-2xl">
            subscribe
          </h3>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="text"
              className="rounded-md text-black py-2 px-3 mt-6 lg:text-sm xl:text-base"
              placeholder="Enter email address"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <p
              className="text-purple500 text-xs font-semibold"
              ref={emailRef}
            ></p>
            <button className="bg-purple500 block mt-4 ml-auto py-1 px-4 text-sm rounded-md">
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
