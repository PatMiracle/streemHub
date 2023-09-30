import AuthLayout from '/layouts/auth-layout'
import Form from './form'
import img from '/public//images/login-img.png'

const Login = () => {
  return (
    <AuthLayout img={img}>
      <Form />
    </AuthLayout>
  )
}

export default Login
