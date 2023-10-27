import img from 'public/images/signup-img.png'
import Image from 'next/image'
import Form from './form'

export default function SignUp() {
  return (
    <>
      <Image
        src={img}
        priority
        className="w-[40%] h-screen fixed left-0 top-0 object-cover"
        alt=""
      />
      <main className="pt-20 pb-4 w-[40%] relative left-[50%]">
        <Form />
      </main>
    </>
  )
}
