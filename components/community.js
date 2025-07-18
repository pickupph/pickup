import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import influencersData from '../fakeData/influencers.json'

export default function Community() {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1184px] mx-auto px-5 py-5">
        <h2 className="text-[32px] text-[#131415]">Join the Pickup community today</h2>
        <p className="text-[20px] text-[#53585f] max-w-[760px]">Industry leading restaurateurs, entrepreneurs, and brands use Pickup in their marketing strategy and you should too.</p>
      </div>

      <div className="py-8 max-w-[1184px] mx-auto px-5 overflow-visible py-5">
        <Swiper
          className={``}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            
          }}
        >
          {
            influencersData.map((item, i)=>(
              <SwiperSlide key={i}>
                <div>
                  <div className='mb-3 rounded-xl md:rounded-3xl overflow-hidden hover:scale-95 transition-all duration-300 ease-in-out'>

                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Image className="rounded-xl md:rounded-3xl object-cover" src={item.image.src} width={item.image.width} height={item.image.height} alt={item.name} />
                    </a>
                    
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className='flex items-center space-x-3'>
                      <Image className='rounded-full' src={item.icon.src} width={42} height={42} alt={item.name} />
                      <h3 className='text-[14px] md:text-[20px]'>{item.name}</h3>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      <div className="container mx-auto">
        <div className="text-center py-[50px]">
          <a className="text-fs-button md:text-fs-buttonLg uppercase px-32px py-3 rounded-2xl font-semibold whitespace-nowrap transition duration-200 ease-in-out items-center inline-flex justify-center bg-primary2 my-5 h-buttonLg text-white hover:brightness-90" href="/signup">Get started for FREE</a>
        </div>
      </div>
    </section>
  )
}