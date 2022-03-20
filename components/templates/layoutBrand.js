// Packages

// Components
import Meta from "./meta"

export default function LayoutBrand({ className, classNameMain, meta, children }) {

  return (
    <>
      <Meta {...meta} />
      <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>

        

        {/** Main */}
        <main className={`flex-grow ${classNameMain}`}>{children}</main>

        

      </section>
    </>
  )
}
