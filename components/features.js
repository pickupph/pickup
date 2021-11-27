//
import Image from 'next/image'
import Button from './templates/button'

//
import dataFeatures from '../fakeData/features.json'

export default function Features({ className }) {
  return (
    <section className={`${className}`}>
      <div className="py-20 px-5 container mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          {
            dataFeatures.map((f,i)=>(
              <div key={i} className="flex justify-center mb-5 md:mb-0">
                <div className="md:max-w-narrowXS">
                  <div className="py-10 md:py-0 flex items-center justify-center bg-gray-100 min-h-[310px] rounded-2xl md:h-imageBoxMD lg:h-imageBox">
                    <Image src={f.image.src} width={64} height={64} alt={f.label} />
                  </div>
                  <div>
                    <h3 className="text-fs-boxSubHeader text-center my-5">{f.label}</h3>
                  </div>
                  <div className="text-fs-bodySM text-center leading-loose">
                    <p>{f.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="my-20 text-center">
          <Button bg="bg-white" className=" border border-primary2 text-primary2 hover:bg-primary2 hover:text-white">See All Features</Button>
        </div>
      </div>
    </section>
  )
}