import React from 'react'

const Footer = () => {
  // temp data
  const data = [
    {
      category: 'products',
      list: ['pricing', 'features', 'customers', 'feedback'],
    },
    {
      category: 'help',
      list: ['getting started', 'sign up', 'login', 'FAQ'],
    },
    {
      category: 'site map',
      list: ['ABOUT US', 'COLLAB', 'POSTS', 'CONTACT US'],
    },
  ]

  return (
    <footer className="bg-black text-white p-32 flex justify-between">
      {data.map(({ category, list }, i) => {
        return (
          <div key={i}>
            <h3 className="font-bold uppercase text-2xl">{category}</h3>
            <ul className="flex flex-col gap-6 pt-6 capitalize">
              {list.map((text, i) => (
                <li key={i} className="text-xl">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      <div>
        <h3 className="font-bold uppercase text-2xl">subscribe</h3>
        <form>
          <input
            type="text"
            className="rounded-md text-black py-2 px-3 mt-6"
            placeholder="Enter email address"
          />
          <button className="bg-purple500 block mt-4 ml-auto py-1 px-4 text-sm rounded-md">
            Send
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
