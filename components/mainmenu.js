// Package
import Link from 'next/link'
import { useDispatch } from 'react-redux'

//
import { setPopupMenu } from "../store/uiSlice"

// Fake data
import menuItems from '../fakeData/menuItems.json'

export default function MainMenu({ className }) {

  const dispatch = useDispatch()

  return (
    <ul className={`flex text-fs-mainMenu space-x-10 h-full ${className}`}>
      {
        menuItems.map((m,i)=>(
          <li key={i} className="group h-full items-center flex relative">
            <Link href={m.url}><a onClick={()=>dispatch(setPopupMenu(false))}>{m.label}</a></Link>
            <div className="h-0.5 bg-gradient-to-r from-primary1 to-primary2 absolute transition-all duration-100 ease-in-out bottom-0 w-0 group-hover:w-full hidden lg:block"></div>
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