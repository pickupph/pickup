// 
import Image from 'next/image'
import Link from 'next/link'

// Fake Data
import dataSocialMedia from '../fakeData/socialMedia.json'

export default function FooterLayoutBasic() {
  return(
    <footer className="px-5 py-[40px] bg-white text-center mt-[40px]">
      <div className="mb-5">
        <Link href="/">
          <a><Image src="/images/logo-square.png" width={32} height={32} alt="Pickup PH" className="grayscale" /></a>
        </Link>
      </div>
      <div>
        <ul className="flex items-center justify-center space-x-5">
          {
            dataSocialMedia.map((sm, i)=>(
              <li key={i}>
                <Link href={sm.link} target="_blank" rel="noopener noreferrer">
                  <a>
                    <Image src={sm.icon.src} alt={sm.label} width={16} height={16} />
                  </a>
                </Link>
              </li>
            ))
          }
          </ul>
      </div>
    </footer>
  )
}