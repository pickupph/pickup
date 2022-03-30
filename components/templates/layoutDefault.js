// Packages
import { useSelector } from "react-redux"
import Link from "next/link"

// Components
import Meta from "./meta"
import Header from "../header"
import Footer from "../footer"
import PopupMainmenu from "../popupMainMenu"
import SocialMedia from "../socialMedia"
import Toolbar from "../toolbar"

export default function LayoutDefault({ className, classNameMain, meta, children }) {

  const { popupMenu } = useSelector(state => state.ui)

  return (
    <>
      <Meta {...meta} />
      <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>
        
        {/** Toolbar */}
        <Toolbar>
          🎉 We have a new QR Dine-in ordering feature <Link href="/contact"><a>Learn More</a></Link>
        </Toolbar>

        {/** Header */}
        <Header />

        {/** Main */}
        <main className={`flex-grow ${classNameMain}`}>{children}</main>

        {/** Social media */}
        <SocialMedia />

        {/** Footer */}
        <Footer />

        {/** Mobile popup menu */}
        <PopupMainmenu popupMenu={popupMenu} />

      </section>
    </>
  )
}

/**
 * 
 * note: give min-h, to make "main" cover space
 * 
 */