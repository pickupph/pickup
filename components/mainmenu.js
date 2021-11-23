// Package
import Link from 'next/link'

// Fake data
import menuItems from '../fakeData/menuItems.json'

export default function MainMenu({ className }) {
  return (
    <ul className={`flex text-fs-mainMenu space-x-10 h-full ${className}`}>
      {
        menuItems.map((m,i)=>(
          <li key={i} className="h-full h-full items-center flex">
            <Link href={m.url}><a>{m.label}</a></Link>
          </li>
        ))
      }
    </ul>
  )
}

/**
* 
* note: If this site will be a SPA, just use "a" tags instead of "Link"
* 
*/