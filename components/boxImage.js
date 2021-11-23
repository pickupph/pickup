import Image from 'next/image'

export default function BoxImage({ 
  className, 
  order = "lr" 
}) {
  return (
    <section>
      <div className={`py-5 md:py-0 container mx-auto grid md:grid-cols-2 md:gap-10 items-center justify-content md:min-h-boxXL ${ className}`}>
        
        {/** Left */}
        <div className={`p-5 flex items-center justify-center ${order=='rl'?`md:order-2`:``}`}>
          <Image src="/images/image-placeholder.png" alt="Placeholder image" height={64} width={64} />
        </div>

        {/** Right */}
        <div className="p-5 flex justify-center">
          <div className="max-w-narrowSM">
            <h2 className="text-fs-subHeaderSM md:text-fs-subHeader mb-5">
              Lorem Ipsum
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}