import { iconsInputs } from 'lib/data'

export default function PostForm() {
  return (
    <div className=" flex flex-row gap-8 py-7">
      <div className="w-12 h-12 bg-inputBg rounded-full px-8 py-8"></div>
      <form
        className=" flex flex-col w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <textarea
          name="Create-post"
          placeholder="Create post......"
          id="create-post"
          className="w-full h-52 text-lg resize-none px-8 py-6 bg-transparent border-[1px] border-purple500 rounded-2xl outline-0 placeholder-white"
        ></textarea>
        <div className=" flex justify-between my-6">
          <button className="font-semibold text-purple500 text-lg underline self-start">
            Add link to code
          </button>
          <div className=" flex gap-8 self-end items-center">
            <div className=" flex flex-row gap-4 items-center">
              {iconsInputs.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={openFileInputs}
                    className="grid place-content-center w-12 h-10 flex-grow-0 text-purple500 border border-purple500 rounded-lg"
                  >
                    <input
                      type="file"
                      name={`${item.idName}`}
                      id={`${item.idName}`}
                      accept={`${item.fileType}`}
                      className=" hidden"
                    />
                    {item.icon}
                  </button>
                )
                function openFileInputs() {
                  document.getElementById(`${item.idName}`).click()
                }
              })}
            </div>
            <button
              type="submit"
              className="bg-purple500 border-0 rounded-lg flex-shrink-0 font-bold px-8 py-4 text-xl"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
