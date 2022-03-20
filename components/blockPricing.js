// Helpers
import { CURRENCY_NAME, CURRENCY_SYMBOL } from "../config/constants"
import { currency } from "../lib/helper"

// Components
import Button from './templates/button'
import { IconCheck } from "./templates/icons"

export default function BlockPricing({ pricingPeriod, pricing }) {

  //
  // Set active price depending on tier period
  //
  let price = pricingPeriod=="monthly" ? pricing.price.monthly : pricing.price.annual
  
  return (
    <div key={pricing.name} className={`transition-all duration-500 ease-in-out border rounded-2xl p-7 flex flex-col relative drop-shadow-sm hover:drop-shadow-lg bottom-0 hover:bottom-2 ${pricing.featured ?  `text-white bg-gradient-to-b from-primary2 to-[#b376ff]`:``}`}>

      {
        pricing.featured ?
         <span className="bg-[#7adbff] inline-block w-auto absolute py-1 px-4 top-[-14px] rounded-full text-black font-bold text-[12px] uppercase">Recommended</span> :
         null
      }

      {/** Top header */}
      <div>

        <h2 className={`text-[32px] capitalize font-semibold mb-5`}>
          {pricing.name}&nbsp;{price ? CURRENCY_SYMBOL+currency(price) : null}
        </h2>
        
        {
          price ? 
            <p className="mb-5 font-semibold">
              <span className="capitalize">{CURRENCY_NAME}</span> {pricingPeriod=="monthly" ? `per month` : `per annual`}<br />
              <span className={`font-normal ${pricing.featured ? `text-white`: `text-gray-500`}`}>Zero commissions</span>
            </p> :
            null
        }

        <p className={`mb-5 ${pricing.featured ?`#ffffff`:`text-gray-500`}`}>{pricing.description}</p>

      </div>

      {/** middle content */}
      <div className={`mb-5 flex-grow`}>
        <ul>
        {
          pricing.features.map((f, i)=>(
            <li key={i} className="my-3 font-semibold flex space-x-5">
              <IconCheck color={pricing.featured ? `#ffffff` : `#fc8b0b`} />
              <span>{f}</span>
            </li>
          ))
        }
        </ul>
      </div>

      {/** button */}
      <div className="my-5">
        <Button 
          type="link"
          link="/signup"
          bg="bg-white hover:bg-primary2"
          className={`rounded-xl w-full capitalize  ${pricing.featured ? `text-black hover:text-white border border-white` : `text-primary2 hover:text-white border border-primary2` }`}
        >Get Started</Button>
      </div>
      
    </div>
  )
}