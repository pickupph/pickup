// Components
import Header from "../header"
import Footer from "../footer"

export default function LayoutDefault({ className, children }) {
  return (
    <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </section>
  )
}

/**
 * 
 * note: give min-h, to make "main" cover space
 * 
 */