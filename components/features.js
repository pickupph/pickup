//
import Image from 'next/image'
import Button from './templates/button'

//
import dataFeatures from '../fakeData/features.json'

export default function Features({ className }) {
  return (
    <section className={`${className}`}>
      <div className="py-20 px-5 container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {
            dataFeatures.map((f,i)=>(
              <div key={i} className="flex justify-center mb-5 md:mb-0">
                <div className="md:max-w-narrowXS">
                  <div className="py-10 md:py-0 flex items-center justify-center rounded-2xl md:h-imageBoxMD lg:h-imageBox">
                    <Image src={f.image.src} width={310} height={310} alt={f.label} className="shadow hover:shadow-md" />
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
        <div className="text-center">
          <Button type="link" link="/pricing" bg="bg-white" className=" border border-primary2 text-primary2 hover:bg-primary2 hover:text-white">See All Features</Button>
        </div>
      </div>
    </section>
  )
}