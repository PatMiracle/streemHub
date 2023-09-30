import Image from 'next/image'
export default function AuthLayout({ img, children }) {
  return (
    <>
      <Image
        src={img}
        priority
        className="w-[40%] h-screen fixed left-0 top-0 object-cover"
      />
      <main className="pt-20 pb-4 w-[40%] relative left-[50%]">{children}</main>
    </>
  )
}
