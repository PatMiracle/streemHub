import Form from './form'
import img from '/public//images/login-img.png'
import Image from 'next/image'

export const metadata = {
  title: 'Login',
}

const Login = () => {
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

export default Login
