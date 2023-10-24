'use client'

import style from './styles.module.css'
import features from '@/utils/home-feats'
import { faq } from '@/utils/data'
import tick from '@/public/vectors/tick.svg'
import { MdPlayArrow } from 'react-icons/md'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <main className="mt-20">
      <div className="w-10/12 py-40 mx-auto relative">
        {/* top horizontal line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: '100%',
            transition: { ease: 'easeInOut', duration: 1.2 },
          }}
          className="absolute top-0 left-0 h-[2px] bg-purple500"
        ></motion.div>
        {/* left vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{
            height: '195px',
            transition: { ease: 'easeInOut', duration: 1.2 },
          }}
          className="absolute top-[2px] left-0 w-[2px] bg-purple500"
        ></motion.div>
        {/* features */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { ease: 'easeInOut', duration: 0.8 },
          }}
          className="absolute -top-6 right-0 bg-black pl-6"
        >
          <h2 className="lg:text-4xl xl:text-5xl font-bold">Main Features</h2>
          <p className="lg:text-lg xl:text-xl">
            Here are some of our main features
          </p>
        </motion.div>
        {/* right vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{
            height: '402px',
            transition: { ease: 'easeInOut', duration: 1 },
          }}
          className="absolute top-24 w-[2px] right-0 bg-purple500"
        ></motion.div>
        <section className="grid gap-10 px-10 pb-16">
          {features.map(({ title, text, img }, i) => (
            <div
              className={`${style.feature} relative flex items-center justify-between even:flex-row-reverse even:text-right`}
              key={i}
            >
              {/* circle */}
              <div
                className={clsx(
                  'absolute w-9 h-9 border-[3px] bg-black z-20 border-purple500 rounded-full top-9',
                  i % 2 ? '-right-14' : '-left-14'
                )}
              ></div>
              {/* vertical line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{
                  height: '500px',
                  transition: { ease: 'easeInOut', duration: 1 },
                }}
                className={clsx(
                  'absolute w-[2px] top-12 -z-10',
                  i % 2 ? '-right-10' : '-left-10',
                  i === features.length - 1 && 'max-h-0'
                )}
                style={{
                  background:
                    'linear-gradient(rgb(139, 12, 255) 0%, rgba(139, 12, 255, 0) 100%)',
                }}
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: 'easeInOut', duration: 0.95 },
                }}
                className={clsx(
                  style.text,
                  'relative py-6 lg:px-8 xl:px-10 rounded-[14px]'
                )}
              >
                <h3 className="font-bold lg:text-3xl xl:text-4xl text-purple500">
                  {title}
                </h3>
                <p className="xl:text-lg text-slate-50">{text}</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{
                  scale: 1,
                  transition: { ease: 'circOut', duration: 0.5 },
                }}
                style={{ boxShadow: 'inset 0px 4px 40px #000000' }}
                className="flex-shrink-0 lg:w-56 lg:h-52 xl:w-60 xl:h-56 rounded-[14px] bg-purple500 grid place-content-center"
              >
                <Image src={img} alt={title} priority />
              </motion.div>
            </div>
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
              <motion.div
                initial={{ y: 50 }}
                whileInView={{
                  y: 0,
                  transition: { ease: 'easeInOut', duration: 1 },
                }}
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
              </motion.div>
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
