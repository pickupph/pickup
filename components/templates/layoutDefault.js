// Components
import Header from "../header";

export default function LayoutDefault({ className, children }) {
  return (
    <section className={`${className} font-karla text-body`}>
      <Header />
      {children}
    </section>
  )
}