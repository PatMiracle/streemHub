import verifiedImg from '/public/images/verify_img.png'
import Image from 'next/image'

export default function VerifyLayout({ children }) {
  return (
    <>
      <Image
        src={verifiedImg}
        alt=""
        className="fixed h-screen top-0 left-0 w-16 object-cover"
      />
      <main>{children}</main>
    </>
  )
}
