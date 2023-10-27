import Link from 'next/link'
import VerifyLayout from 'layouts/verify-layout'
import { Verify } from 'iconsax-react'

export default function verified() {
  return (
    <VerifyLayout>
      <div className="w-[502px] bg-white rounded-lg flex flex-col items-center justify-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] py-20">
        <Verify size="114" color="#8B0CFF" variant="Bold" />
        <p className="text-black mt-5 text-lg text-center mb-11 font-medium">
          You have successfully
          <br /> changed your password
        </p>
        <Link
          href="/login"
          className="font-bold bg-purple500 block w-[222px] py-4 rounded-lg text-center"
        >
          Go back to login
        </Link>
      </div>
    </VerifyLayout>
  )
}
