//
import { useSelector } from "react-redux"

// Components
import Header from "../header"
import Footer from "../footer"
import PopupMainmenu from "../popupMainMenu"

export default function LayoutDefault({ className, children }) {

  const { popupMenu } = useSelector(state => state.ui)

  return (
    <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      {
        popupMenu ? <PopupMainmenu /> : null
      }
    </section>
  )
}

/**
 * 
 * note: give min-h, to make "main" cover space
 * 
 */