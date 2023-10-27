import { messages } from 'lib/data'
import { Trash } from 'iconsax-react'

export const metadata = {
  title: 'Deleted',
}

const DeletedMessages = () => {
  return (
    <>
      <button className="pl-14 pb-7 flex items-center gap-2">
        Clear <span className="text-grey">Trash</span> <Trash />
      </button>
      <div className="grid gap-3">
        {messages.map(({ name, text, time }, i) => {
          return (
            <div
              className="py-3 px-14 flex items-center gap-6 border-b border-b-purple700"
              key={i}
            >
              <div className="w-9 h-9 rounded-full bg-inputBg shrink-0"></div>
              <div>
                <h4 className="font-medium text-sm">{name}</h4>
                <p className="text-grey text-xs">{text}</p>
              </div>
              <span className="font-light text-xs text-grey ml-auto">
                {time}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DeletedMessages
