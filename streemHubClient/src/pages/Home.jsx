import Header from '../components/home/Header'
import Main from '../components/home/Main'
import moonRock from '../assets/images/moon_rock.png'
import overlay from '../assets/images/home/bg-moon-overlay.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <div className="relative">
        <div className="pt-56">
          <img
            src={moonRock}
            alt=""
            className="absolute w-full h-[1100px] object-cover bottom-0 -z-30"
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

export default Home
