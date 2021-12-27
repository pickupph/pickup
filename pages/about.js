import Image from 'next/image'

import LayoutDefault from "../components/templates/layoutDefault"

import { SITE_NAME } from "../config/constants"

export default function About() {

  return (
    <LayoutDefault
      meta={{
        title: `About ${SITE_NAME} | The ${SITE_NAME} story`
      }}
    >

      <div className="container mx-auto px-5 py-10 md:py-20">

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto">
          <h1 className="text-[30px] md:text-[40px]">About {SITE_NAME} - Our Founder's Story</h1>
        </div>

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto border-l-[6px] border-l-[#39e09b]">
          <p className="text-[22px] md:text-[32px]">{SITE_NAME} makes your online content more discoverable, easier to manage and more likely to convert.</p>
        </div>

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto my-[50px]">
          <div className='box-shadow box-shadow--blue'>
            <Image src="/images/placeholders/about-us.jpg" width={1400} height={787} alt="Pickup PH" layout='responsive' className='rounded-lg block cover' />
          </div>
        </div>

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto my-[50px]">
          <h2 className='text-[24px] mb-3'>Build A Branded Store In Minutes</h2>
          <p>Instantly allow customers to place orders from your website, Facebook page, commission free with full payments and delivery integration in an all-in-one solution.</p>
        </div>

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto my-[50px]">
          <ul>
            {
              [
                {
                  "label": "also add online ordering to your website",
                  "content": "Already have a website? No problem, we will show you how to add online ordering to your existing website in seconds.",
                  "icon": {
                    "src": "/images/icon-tomato-cart.png",
                    "width": 30,
                    "height": 28
                  }
                },
                {
                  "label": "...and your Facebook business page",
                  "content": "We will also show you how to add online ordering to your Facebook business page – hello, digital age!",
                  "icon": {
                    "src": "/images/icon-facebook-blue.png",
                    "width": 30,
                    "height": 30
                  }
                }
              ].map((item, i)=>(
                <li key={i} className='flex space-x-5 mb-5'>
                  <div className='min-w-[40px]'>
                    <Image src={item.icon.src} alt={item.label} height={item.icon.height} width={item.icon.width} />
                  </div>
                  <div>
                    <h4 className='text-[22px] font-semibold'>{item.label}</h4>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </LayoutDefault>
    
  )
}