// Packages

// Components
import Meta from "./meta"
import FooterLayoutBasic from "../footerLayoutBasic"
import HeaderLayoutBasic from "../headerLayoutBasic"

export default function LayoutBasic({ className, classNameMain, meta, children }) {

  return (
    <>
      <Meta {...meta} />
      <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>

        {/** Header */}
        <HeaderLayoutBasic />

        {/** Main */}
        <main className={`flex-grow ${classNameMain}`}>{children}</main>

        <FooterLayoutBasic />

      </section>
    </>
  )
}
