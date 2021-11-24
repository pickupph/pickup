// Packages
import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className }) {
  return (
    <div className={`max-w-127px ${className}`}>
      <Link href="/">
        <a><Image src="/images/logo.png" alt="Pickup Logo" width={200} height={50} /></a>
      </Link>
    </div>
  )
}