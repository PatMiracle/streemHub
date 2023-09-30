import AuthLayout from '/layouts/auth-layout'
import img from '/public/images/signup-img.png'
import Form from './form'

export default function SignUp() {
  return (
    <AuthLayout img={img}>
      <Form />
    </AuthLayout>
  )
}
