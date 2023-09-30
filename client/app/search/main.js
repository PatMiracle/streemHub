'use client'

import { useEffect, useRef, useState } from 'react'
import PostsNavBar from '/components/post-nav'
import { SearchNormal, DocumentFilter } from 'iconsax-react'
import { searchResults, tags } from '/utils/data'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'

const Main = () => {
  const params = useSearchParams()
  const searchItem = params.get('search')
  const category = parseInt(params.get('category'))
  const [search, setSearch] = useState(searchItem || '')
  const [activeBtn, setActiveBtn] = useState(category || 0)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const searchItems = searchResults.map((item) => (
    <div key={item.id} className="grid gap-3">
      <div className="bg-inputBg rounded-xl h-80"></div>
      <h3 className=" text-xl font-bold">{item.name}</h3>
      <p className="text-lg">{item.author}</p>
    </div>
  ))

  return (
    <div className="w-10/12 mx-auto">
      <header>
        <PostsNavBar />
        <form className="relative">
          <SearchNormal className="absolute top-5 left-10" size={36} />
          <input
            type="text"
            placeholder="HTML tutorial"
            autoComplete="off"
            value={search}
            ref={inputRef}
            className="w-full py-6 px-24 bg-purple700 border border-purple-800 rounded-2xl text-white focus:outline-none placeholder-white text-xl"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <main className="flex flex-row justify-between items-start">
        <section className=" w-9/12 grid grid-cols-2 pl-5 pr-28 my-16 gap-24 min-h-scren relative after:absolute after:w-px after:min-h-full after:bg-purple700 after:top-0 after:right-10">
          {searchItems}
        </section>
        <section className=" w-4/12 my-16">
          <p className=" text-lg">
            <DocumentFilter className="inline" /> Filters
          </p>
          <div className="flex py-8 gap-x-4 gap-y-8 w-[300px] flex-wrap">
            {tags.map((tag, i) => {
              return (
                <button
                  key={i}
                  className={clsx(
                    'border border-purple700 rounded-lg hover:bg-purple500 text-white py-2 px-4 flex-shrink-0 capitalize',
                    // toogle active btn
                    activeBtn === i && 'bg-purple500'
                  )}
                  onClick={() => setActiveBtn(i)}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
