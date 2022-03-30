//
import Image from 'next/image'
import Logo from '../logo'

// Components
import Meta from "./meta"

export default function LayoutFull2cols({ className, meta, children }) {

  return (
    <>
      <Meta {...meta} />
      <section className={`${className} font-karla text-body flex flex-col min-h-screen`}>

        {/** Main */}
        <main className="flex-grow grid md:grid-cols-2">
          <div className="drop-shadow-md flex flex-col">
            <header className="p-5 flex flex-col">
              <Logo />
            </header>
            <section className="flex-grow flex items-center justify-center">
              <div className="mb-20">
                {children}
              </div>
            </section>
          </div>
          <div className="items-center justify-center bg-gray-100 hidden md:flex bg-[url('/images/pickup-app-on-table.jpg')] bg-cover bg-center">
            <Image src="/images/image-placeholder.png" height={64} width={64} alt="image placeholder" />
          </div>
        </main>

      </section>
    </>
  )
}

/**
 * 
 * note: give min-h, to make "main" cover space
 * 
 */