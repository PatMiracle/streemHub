import Image from 'next/image'
export default function AuthLayout({ img, children }) {
  return (
    <section>
      <Image
        src={img}
        priority
        className="w-[40%] h-screen fixed left-0 top-0 object-cover"
      />
      {children}
    </section>
  )
}
