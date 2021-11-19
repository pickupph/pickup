//
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className="max-w-127px">
      <Link href="/">
        <a><Image src="/images/logo.png" alt="Pickup Logo" width={200} height={50} /></a>
      </Link>
    </div>
  )
}