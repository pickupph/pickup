// Packages
import Link from 'next/link'

// Components
import Meta from "./meta"
import HeaderBlog from "../headerBlog"
import FooterBlog from "../footerBlog"

export default function LayoutBlog({ className, meta, children }) {

  return (
    <>
      <Meta {...meta} />
      <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>

        {/** Header */}
        <HeaderBlog />

        {/** Main */}
        <main className="flex-grow max-w-[1148px] mx-auto">{children}</main>

        {/** */}
        <div className="hidden md:block fixed rotate-90 uppercase underline hover:no-underline font-bold left-[-40px] top-[44%] text-[#202020]">
          <Link href="/"><a>Back to Pickup.ph</a></Link>
        </div>

        {/** Footer */}
        <FooterBlog />

      </section>
    </>
  )
}

/**
 * 
 * note: give min-h, to make "main" cover space
 * 
 */