import img from '/public/images/signup-img.png'
import Image from 'next/image'
import Form from './form'

export default function SignUp() {
  return (
    <section>
      <Image
        src={img}
        priority
        className="w-[40%] h-screen fixed left-0 top-0 object-cover"
      />
      <Form />
    </section>
  )
}
