'use client'

import PostsNavBar from '/components/post-nav'
import searchIcon from '/public/vectors/searchnormal.svg'
import Image from 'next/image'


const Header = () => {
  return (
    <>
      <header className="w-[85%] mx-auto">
        <PostsNavBar />
        <form className='bg-[#592d81] rounded-xl border-[1px] border-solid border-[#9240d9] flex flex-row-reverse justify-end gap-4 px-4'>
          <input
            type="text"
            placeholder='HTML tutorial'
            autoComplete='off'
            className='w-[100%] py-3 px-3 bg-transparent rounded-xl text-white focus:outline-none placeholder-white' name="search-box" id="search-box" />
        <button type='submit' className='bg-transparent rounded-xl opacity-60' onClick={(e)=>{e.preventDefault()}}>
          <Image src={searchIcon} alt='search-icon' priority />
        </button>
      </form>
      </header>
      
    </>
  )
}

export default Header