import style from './styles.module.css'
import features from '/utils/home-feats'
import { faq } from '/utils/data'
import tick from '/public/vectors/tick.svg'
import { MdPlayArrow } from 'react-icons/md'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <main className="mt-20">
      <div
        className={clsx(
          'w-10/12 py-40 mx-auto relative',
          // top horizontal line
          'before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-purple500',
          // left vertical line
          'after:absolute after:top-[2px] after:left-0 after:h-48 after:w-[2px] after:bg-purple500'
        )}
      >
        {/* features */}
        <div className="absolute -top-6 right-0 bg-black pl-6 after:absolute after:top-24 after:h-[402px] after:w-[2px] after:right-0 after:bg-purple500">
          <h2 className="lg:text-4xl xl:text-5xl font-bold">Main Features</h2>
          <p className="lg:text-lg xl:text-xl">
            Here are some of our main features
          </p>
        </div>
        <section className="grid gap-10 px-10 pb-16">
          {features.map(({ title, text, img }, i) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transtion: { ease: 'easeInOut', duration: 1 },
              }}
              className={`${style.feature} flex items-center justify-between even:flex-row-reverse even:text-right`}
              key={i}
            >
              <div
                className={clsx(
                  style.text,
                  'relative py-6 lg:px-8 xl:px-10 rounded-[14px]',
                  // circle
                  'before:absolute before:w-9 before:h-9 before:border-[3px] before:bg-black before:z-20 before:border-purple500 before:rounded-full before:top-2',
                  // vertical line
                  'after:absolute after:w-[2px] after:h-[600px] after:bg-purple500 after:top-11'
                )}
              >
                <h3 className="font-bold lg:text-3xl xl:text-4xl text-purple500">
                  {title}
                </h3>
                <p className="xl:text-lg text-slate-50">{text}</p>
              </div>
              <div
                style={{ boxShadow: 'inset 0px 4px 40px #000000' }}
                className="flex-shrink-0 lg:w-56 lg:h-52 xl:w-60 xl:h-56 rounded-[14px] bg-purple500 grid place-content-center"
              >
                <Image src={img} alt={title} priority />
              </div>
            </motion.div>
          ))}
        </section>
        {/* video */}
        <section
          className="w-full min-h-[90vh] rounded-[14px] flex items-center justify-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url(/images/home/bg-moon-overlay.png)] after:mix-blend-color after:z-10"
          style={{
            background:
              'linear-gradient(90deg, #FFFFFF -13.64%, #000000 46.5%, rgba(255, 255, 255, 0.21) 108.16%)',
          }}
        >
          <div className="w-32 h-32 rounded-full grid place-content-center bg-[#796e85] z-40 cursor-pointer">
            <MdPlayArrow className="text-inputBg" size={100} />
          </div>
        </section>
        {/* faq */}
        <section className="py-32">
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
                <p className="text-2xl">{text}</p>
                <Image
                  src={tick}
                  alt=""
                  className="shrink-0 py-3 px-[10px] border border-solid border-purple500 rounded-full lg:w-8 xl:w-12"
                />{' '}
              </div>
            )
          })}
          <button className="flex items-center gap-7 bg-[#5b09ae] rounded-xl px-6 py-2 text-xl mt-10">
            <span>See More</span>
            <MdPlayArrow className="rotate-90" />
          </button>
        </section>
      </div>
    </main>
  )
}

export default Main
