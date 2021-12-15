// 
import Image from 'next/image'
import Link from 'next/link'

// Components
import Logo from '../components/logo'

// Fake Data
import dataSocialMedia from '../fakeData/socialMedia.json'

export default function SocialMedia() {
  return (
    <section className="px-5">
      <div className="py-4 container mx-auto border-t border-b flex items-center justify-between">
        <Logo />
        <div>
          <ul className="flex items-center space-x-5">
          {
            dataSocialMedia.map((sm, i)=>(
              <li key={i}>
                <Link href={sm.link} target="_blank" rel="noopener noreferrer">
                  <a>
                    <Image src={sm.icon.src} alt={sm.label} width={24} height={24} className='grayscale hover:grayscale-0 transition-all duration-300 ease-in-out' />
                  </a>
                </Link>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </section>
  )
}