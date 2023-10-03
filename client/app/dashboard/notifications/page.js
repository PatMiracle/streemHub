import { MdPlayArrow } from 'react-icons/md'
import { notifs } from '/utils/data'

export const metadata = {
  title: 'Notifications',
}

const Notifications = () => {
  return (
    <>
      <section
        className="border-[3px] border-purple500 py-7 rounded-[30px] h-screen fixed"
        style={{ width: 'calc(100% - 165px)' }}
      >
        <div className="flex pl-14 pr-9 pb-5 justify-between items-baseline border-b-[3px] border-b-purple500">
          <div>
            <h3 className="font-medium text-4xl">Notifications</h3>
            <p className="text-grey text-xl font-light">Manage Notifications</p>
          </div>
          <div className="text-[#808080] text-xl font-light rounded-lg border border-purple500 py-2 px-3">
            June <MdPlayArrow className="rotate-90 inline text-purple500" />
          </div>
        </div>

        <div
          className="pt-8 px-9 grid gap-3 overflow-y-scroll scrollbar-thin"
          style={{
            height: 'calc(100vh - 250px)',
          }}
        >
          {notifs.map(({ notif, info }, i) => {
            return (
              <div
                className="py-3 pl-6 pr-14 rounded-[20px] flex items-center gap-6 bg-[#1c0233]"
                key={i}
              >
                <div className="w-12 h-12 rounded-full bg-inputBg shrink-0"></div>
                <div>
                  <h4 className="font-medium">{notif}</h4>
                  {info && <p className="text-sm text-grey">{info}</p>}
                </div>
                <span className="font-light text-xl text-grey ml-auto">
                  10min ago
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Notifications
