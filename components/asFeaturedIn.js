// Packages
import Image from 'next/image'

export default function AsFeaturedIn({ className }) {
  return (
    <section className={`my-5 p-5 md:mb-20 ${className}`}>
      <div className="container mx-auto">
        <p className="text-[20px] text-center my-10">As featured in</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-center text-center gap-5 w-full">
          <div className={`bg-[#f5f7f8] px-5 py-3 rounded-2xl w-full h-[94px] flex items-center justify-center`}>
            <Image src="/images/logo-manila-bulletin.png" alt="Manila Bulletin" width={162} height={32} />
          </div>
          <div className={`bg-[#f5f7f8] px-5 py-3 rounded-2xl w-full h-[94px] flex items-center justify-center`}>
            <Image src="/images/logo-philippine-tatler.png" alt="Philippine Tatler" width={162} height={32} />
          </div>
          <div className={`bg-[#f5f7f8] px-5 py-3 rounded-2xl w-full h-[94px] flex items-center justify-center`}>
            <Image src="/images/logo-rappler.png" alt="Rappler" width={162} height={32} />
          </div>
        </div>
      </div>
    </section>
  )
}