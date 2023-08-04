import { ElementPlus, Message, MessageRemove, Star1 } from 'iconsax-react'
import React from 'react'
import { messages } from '../utils/data'

const Messages = () => {
  return (
    <section className="border-[3px] border-purple500 pt-7 rounded-[30px]">
      <div className="flex pl-14 pr-9 pb-5 justify-between items-baseline border-b-[3px] border-b-purple500">
        <h3 className="font-medium text-4xl">Messages</h3>
        <button className="bg-purple500 text-black flex items-center gap-2 px-4 py-2 rounded-lg">
          <ElementPlus />
          <span>New message</span>
        </button>
      </div>
      <div className="flex">
        <aside className="w-[250px] border-r-2 border-r-purple500">
          <div className="flex gap-5 pl-8 items-center py-6 border-b-2 border-b-purple500 hover:text-purple500 duration-300">
            <Message size={24} variant="Bold" />
            <h4 className="font-medium">All Messages</h4>
          </div>
          <div className="flex gap-5 pl-8 items-center py-6 border-b-2 border-b-purple500 hover:text-purple500 duration-300">
            <Star1 size={24} variant="Bold" />
            <h4 className="font-medium">Starred Messages</h4>
          </div>
          <div className="flex gap-5 pl-8 items-center py-6 border-b-2 border-b-purple500 hover:text-purple500 duration-300">
            <MessageRemove size={24} variant="Bold" />
            <h4 className="font-medium">Deleted Messages</h4>
          </div>
        </aside>
        <div
          className="pt-9 pb-7 px-8 grid gap-3"
          style={{ width: 'calc(100% - 250px' }}
        >
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
      </div>
    </section>
  )
}

export default Messages
