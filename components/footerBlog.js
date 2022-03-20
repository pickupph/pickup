import Link from 'next/link'

export default function FooterBlog() {
  return(
    <footer className="px-5 py-[64px] bg-[#eeedfb] text-center mt-[40px] text-[16px]">
      <ul className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-20">
        <li><Link href="/trust-centre"><a>Trust Centre</a></Link></li>
        <li><Link href="/report"><a>Report a violation</a></Link></li>
        <li><Link href="/careers"><a>Careers</a></Link></li>
      </ul>
    </footer>
  )
}