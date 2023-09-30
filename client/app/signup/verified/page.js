import Link from 'next/link'
import VerifyLayout from '/layouts/verify-layout'
import { Verify } from 'iconsax-react'

export default function verified() {
  return (
    <VerifyLayout>
      <div className="w-[502px] bg-white rounded-lg flex flex-col items-center justify-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] py-20">
        <Verify size="114" color="#8B0CFF" variant="Bold" />
        <h2 className="text-black text-5xl font-bold mt-4">Verified!</h2>
        <p className="text-black mt-5 mb-11">
          You have successfully verified the account
        </p>
        <Link
          href="/profile"
          className="font-bold bg-purple500 block w-[222px] py-4 rounded-lg text-center"
        >
          Go to Profile
        </Link>
      </div>
    </VerifyLayout>
  )
}
