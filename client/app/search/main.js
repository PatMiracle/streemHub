import React from 'react'
import Image from 'next/image'
import searchFilter from "/public/vectors/search-filter.svg";
import { searchResults } from '../../utils/data'
import { tags } from "../../utils/data";


const Main = () => {
    const searchItems = searchResults.map((item) => (
        <div key={item.id}>
            <Image src={item.searchImg} alt={`${item.name}-img`} />
            <h3 className=' text-xl'>{item.name}</h3>
            <p className=' text-base'>{item.author}</p>
        </div>
    ));

    
    const tagItems = tags.map((item) => (
        <p key={item.id}
        className=' max-w-[128px] px-[5px] py-[5px] border-x border-y border-purple-500 rounded-xl text-center bg-transparent hover:bg-purple-500 hover:cursor-pointer'>{item.tagName}</p>
    ))

  return (
      <main className='w-[85%] mx-auto flex flex-row justify-between items-start'>
            <section className=' w-[50%] grid grid-cols-2 px-4 my-16 gap-8 after:absolute after:w-px after:h-[1000px] after:bg-[#592d81] after:left-[56%]'>
            {searchItems}
          </section>
          <section className=' w-[40%] my-16'>
              <div className=' flex items-center gap-4'>
                  <Image src={searchFilter} alt='search-filter' priority />
                  <p className=' text-lg'>filters</p>
              </div>
              <div className=' w-[300px] grid grid-cols-2 gap-4 my-6'>
                  {tagItems}
              </div>
          </section>
      </main>
  )
}

export default Main