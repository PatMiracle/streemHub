import { messages } from '/utils/data'

const AllMessages = () => {
  return (
    <div className="grid gap-3">
      {messages.map(({ name, text, time }, i) => {
        return (
          <div
            className="py-3 pl-6 pr-9 rounded-[20px] flex items-center gap-6 bg-[#1c0233]"
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
  )
}

export default AllMessages
