import Header from './header'
import Footer from '@/components/footer'
import Main from './main'
import moonRock from '@/public/images/moon_rock.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <div className="relative">
        <div className="lg:pt-48 xl:pt-56">
          <Image
            src={moonRock}
            alt=""
            className="absolute w-full lg:h-[992px] xl:h-[1100px] object-cover bottom-0 -z-30"
          />
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, #000 100%)',
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
