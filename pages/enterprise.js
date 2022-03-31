// Packages
import Image from 'next/image'
import { useState } from 'react'

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import FormEnterpriseContactForm from '../components/formEnterpriseContactForm'
import Bottom from "../components/bottom"
import Divider from '../components/divider'

export default function Home() {

  const [ stateEnterprise, setStateEnterprise ] = useState("")

  return (
    <LayoutDefault
      meta={{
        title: "Pickup.ph for Enterprise and Retail Groups"
      }}
      classNameMain='bg-gray-100'
    >
      
      <div className="container mx-auto px-5 py-5 md:py-20 text-center">
        <h1 className="text-[40px] mb-[20px]">What will you use Pickup.ph for?</h1>
        <p className="text-[16px]">This helps us tailor your onboarding.</p>
      </div>

      <div className='container mx-auto grid grid-cols-3 gap-[15px] sm:gap-[30px] px-5 max-w-[1024px]'>
        {
          [
            {
              "label": "Multiple stores",
              "content": "My business is a single brand with multiple store locations.",
              "icon": {
                "src": "/images/icon-storefront-black.svg",
                "height": 512,
                "width": 512
              }
            },
            {
              "label": "Multiple brands",
              "content": "My business has multiple brands within a single location. ",
              "icon": {
                "src": "/images/icon-interests-black.svg",
                "height": 512,
                "width": 512
              }
            },
            {
              "label": "Multiple stores & brands",
              "content": "My business has multiple brands with multiple store locations.",
              "icon": {
                "src": "/images/icon-account-tree-black.svg",
                "height": 512,
                "width": 512
              }
            }
          ].map((item, i)=>(
            <div key={i} className={`transition-all duration-300 ease-in-out border hover:border-primary2 rounded-lg bg-white flex flex-col items-center md:justify-between p-3 md:p-10 text-center ${stateEnterprise==item.label?`border-primary2`:``}`} onClick={()=>setStateEnterprise(item.label)}>
              <div className='mb-1'>
                <Image src={item.icon.src} height={80} width={80} alt={item.label} />
              </div>
              <h3 className='mb-1 font-semibold'>{item.label}</h3>
              <p className='hidden md:inline-block'>{item.content}</p>
            </div>
          ))
        }
      </div>

      <div className='container mx-auto px-5 py-10 max-w-[1024px] mb-20'>
        <div className='bg-white p-10 border rounded-md'>
          <h2 className='text-center text-[20px] md:text-[40px] capitalize mb-5'>Enterprise Contact us</h2>
          <FormEnterpriseContactForm enterprise={stateEnterprise} />
        </div>
      </div>

      <Divider className={`h-[60px] bg-white`} />

      <Bottom />

    </LayoutDefault>
    
  )
}