//
import { useSelector } from "react-redux"

// Components
import Meta from "./meta"
import Header from "../header"
import Footer from "../footer"
import PopupMainmenu from "../popupMainMenu"
import SocialMedia from "../socialMedia"
import Toolbar from "../toolbar"

export default function LayoutDefault({ className, children }) {

  const { popupMenu } = useSelector(state => state.ui)

  return (
    <>
      <Meta />
      <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>
        
        {/** Toolbar */}
        <Toolbar>
          🎉 Insert announcement here. <a href="#" className="underline">Learn more</a>
        </Toolbar>

        {/** Header */}
        <Header />

        {/** Main */}
        <main className="flex-grow">{children}</main>

        {/** Social media */}
        <SocialMedia />

        {/** Footer */}
        <Footer />

        {
          popupMenu ? <PopupMainmenu /> : null
        }

      </section>
    </>
  )
}

/**
 * 
 * note: give min-h, to make "main" cover space
 * 
 */