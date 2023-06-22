import { faq, features } from '../../utils/data'
import './style.css'
import { MdPlayArrow } from 'react-icons/md'

const Main = () => {
  return (
    <main className="mt-20 py-40 relative before:absolute before:top-0 before:left-0 before:w-[84%] before:mx-[8%] before:h-[2px] before:bg-purple500 after:absolute after:top-[2px] after:left-[8%] after:h-48 after:w-[2px] after:bg-purple500">
      <div className="absolute -top-6 right-[8%] bg-black pl-6 after:absolute after:top-24 after:h-[402px] after:w-[2px] after:right-0 after:bg-purple500">
        <h2 className="text-5xl font-bold">Main Features</h2>
        <p className="text-xl">Here are some of our main features</p>
      </div>
      {/* features */}
      <div className="grid gap-10 px-10 pb-16">
        {features.map(({ title, text, img }, i) => (
          <div
            className="features-container flex items-center justify-between even:flex-row-reverse even:text-right"
            key={i}
          >
            <div className="text-container relative py-8 px-10 rounded-[14px] max-w-[80%] before:absolute before:w-10 before:h-10 before:border-[3px] before:border-purple500 before:rounded-full before:top-2 after:absolute after:w-[2px] after:h-[570px] after:bg-purple500 after:top-12">
              <h2 className="text-4xl font-bold text-purple500">{title}</h2>
              <p className="text-xl text-slate-50">{text}</p>
            </div>
            <div
              style={{ boxShadow: 'inset 0px 4px 40px #000000' }}
              className="flex-shrink-0 w-64 h-60 rounded-[14px] bg-purple500 grid place-content-center"
            >
              <img src={img} alt={title} />
            </div>
          </div>
        ))}
      </div>
      {/* video */}
      <div
        className="w-full min-h-[90vh] rounded-[14px] flex items-center justify-center"
        style={{
          background:
            'linear-gradient(90deg, #FFFFFF -13.64%, #000000 46.5%, rgba(255, 255, 255, 0.21) 108.16%)',
        }}
      >
        <div className="w-32 h-32 rounded-full grid place-content-center bg-[#796e85]">
          <MdPlayArrow className="text-inputBg" size={100} />
        </div>
      </div>
      {/* faq */}
      <div className="py-32">
        <h2 className="text-4xl text-purple500 font-bold mb-8">FAQS</h2>
        {faq.map((text, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between py-3 px-5 mb-4 rounded-[14px]"
              style={{
                background: 'linear-gradient(#1e053d, #7411cd)',
              }}
            >
              <p className="text-3xl">{text}</p>
              <img
                src="/tick.svg"
                alt=""
                className="shrink-0 py-3 px-[10px] border border-solid border-purple500 rounded-full w-12"
              />{' '}
            </div>
          )
        })}
        <button className="flex items-center gap-8 bg-[#5b09ae] rounded-xl px-6 py-2 text-2xl mt-10">
          <span>See More</span>
          <MdPlayArrow className="rotate-90" />
        </button>
      </div>
    </main>
  )
}

export default Main
