// Packages
import Image from 'next/image'

export default function AsFeaturedIn({ className }) {
  return (
    <section className={`my-5 p-5 md:mb-20 ${className}`}>
      <div className="container mx-auto">
        <p className="text-[20px] text-center my-10">As featured in</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center text-center gap-5 w-full">
          <div className="bg-[#f5f7f8] px-5 py-3 rounded-2xl w-full">
            <Image src="/images/image-placeholder.png" alt="Image placeholder" width={64} height={64} />
          </div>
          <div className="bg-[#f5f7f8] px-5 py-3 rounded-2xl w-full">
            <Image src="/images/image-placeholder.png" alt="Image placeholder" width={64} height={64} />
          </div>
          <div className="bg-[#f5f7f8] px-5 py-3 rounded-2xl w-full">
            <Image src="/images/image-placeholder.png" alt="Image placeholder" width={64} height={64} />
          </div>
          <div className="bg-[#f5f7f8] px-5 py-3 rounded-2xl w-full">
            <Image src="/images/image-placeholder.png" alt="Image placeholder" width={64} height={64} />
          </div>
        </div>
      </div>
    </section>
  )
}