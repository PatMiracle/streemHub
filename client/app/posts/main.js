'use client'
import { FaMicrophone } from 'react-icons/fa'
import Post from '/components/post'
import { posts, iconsInputs } from '/utils/data'

const Main = () => {
  return (
    <main className="py-48 w-[85%] mx-auto">
      <div className="px-10 py-5 border-4 border-purple500 drop-shadow-md rounded-[30px] flex justify-between">
        <div className="w-14 h-14 bg-purple500 rounded-full"></div>
        {/* <input
          type="text"
          placeholder="Share your Problems and Ideas"
          className="w-10/12 bg-black text-white text-xl px-3"
        /> */}
        <FaMicrophone className="text-purple500 opacity-75" size={56} />
      </div>
      {/* Post interaction */}
      <div className=' my-12 before:block before:w-[100%] before:bg-purple500 before:h-[0.5px] before:mx-auto'>
        <div className=' flex flex-row justify-between py-12'>
          <div className="w-14 h-14 bg-[white] rounded-full px-8 py-8"></div>
          <form className=' flex flex-col' onSubmit={(e)=> e.preventDefault()}>
            <textarea name="Create-post" placeholder='Create post......' id="create-post" cols="30" rows="15"
            className='w-[75vw] px-4 py-4 bg-transparent border-[1px] border-purple500 rounded-3xl outline-0 placeholder-white'></textarea>
            <div className=' flex justify-between my-6'>
              <button className=' text-purple500 underline self-start'>Add link to code</button>
              <div className=' flex gap-8 self-end'>
                <div className=' flex flex-row gap-4 items-center'>
                  {
                    iconsInputs.map((item) => {
                      return (
                        <button key={item.id} onClick={openFileInputs}>
                          <input type='file' name={`${item.idName}`} id={`${item.idName}`} accept={`${item.fileType}`} className=' hidden' />
                          {item.icon}
                        </button>
                      )
                      function openFileInputs () {
                        document.getElementById(`${item.idName}`).click()
                      }
                    })
                  }
                </div>
                <button type='submit' className=' bg-purple500 border-0 rounded-xl px-6 py-3 text-xl'>Post</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* posts */}
      <section className="pt-24 pb-10">
        {posts.map((data, i) => (
          <Post key={i} {...data} />
        ))}
      </section>
      <div className="flex w-max gap-6 ml-auto mr-[9%]">
        <div className="w-5 h-5 bg-purple500 rounded-full"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-60"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-50"></div>
        <div className="w-5 h-5 bg-purple500 rounded-full opacity-30"></div>
      </div>
    </main>
  )
}

export default Main
