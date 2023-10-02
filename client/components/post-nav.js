'use client'

import Link from 'next/link'
import { IoPersonCircle } from 'react-icons/io5'
import { Notification } from 'iconsax-react'
import home from '/public/vectors/home.svg'
import square from '/public/vectors/square.svg'
import community from '/public/vectors/community.svg'
import Image from 'next/image'

const PostsNavBar = () => {
  return (
    <nav className="py-[4%] flex justify-between items-center gap-6">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={56}
          height={56}
          priority
          className="w-auto h-auto"
        />
      </Link>
      <div className="flex gap-4 items-center ml-[7%]">
        <Link href="/">
          <Image src={home} alt="" priority />
        </Link>
        <Link href="">
          <Image src={square} alt="" priority />
        </Link>
        <Link href="">
          <Image src={community} alt="" priority />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          href="/dashboard/notifications"
          className="w-12 h-12 rounded-full grid place-content-center bg-purple600"
        >
          <Notification className="text-white" size={30} />
        </Link>
        <Link href="/dashboard/profile">
          <IoPersonCircle className="text-purple500" size={56} />
        </Link>
      </div>
    </nav>
  )
}

export default PostsNavBar
