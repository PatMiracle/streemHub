import { messages } from '/utils/data'
import { Trash } from 'iconsax-react'

export const metadata = {
  title: 'Deleted',
}

const DeletedMessages = () => {
  return (
    <>
      <button className="pl-6 pb-7 flex items-center gap-2">
        Clear Trash <Trash />
      </button>
      <div className="grid gap-3">
        {messages.map(({ name, text, time }, i) => {
          return (
            <div
              className="py-3 pl-6 pr-9 flex items-center gap-6 border-b border-b-purple700"
              key={i}
            >
              <div className="w-9 h-9 rounded-full bg-inputBg shrink-0"></div>
              <div>
                <h4 className="font-medium text-sm">{name}</h4>
                <p className="opacity-50 text-xs">{text}</p>
              </div>
              <span className="font-light text-xs opacity-50 ml-auto">
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
