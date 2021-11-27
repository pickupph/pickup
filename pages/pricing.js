// Packages
import { useState } from "react"
import { useSelector } from "react-redux"

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import BlockPricing from "../components/blockPricing"

export default function Home() {

  const [ statePricingPeriod, setStatePricingPeriod ] = useState("annual")

  const { pricing } = useSelector(state => state.pricing)

  return (
    <LayoutDefault
      meta={{
        title: "Pricing"
      }}
    >

      <div className="container mx-auto px-5 py-5 md:py-10 text-center">
        <h1 className="text-[40px] md:text-fs-heroHeader">Pricing plans</h1>
        <p className="text-fs-body">Pick your plan, you can always change later.</p>
      </div>

      <div className="container mx-auto p-5 text-center">
        <ul className="inline-flex items-center mx-auto space-x-5 text-fs-boxBody">
          <li 
            className={`flex items-center cursor-pointer text-gray-400 font-semibold ${statePricingPeriod=='monthly'?`text-gray-900`:`text-gray-400`}`} 
            onClick={()=>setStatePricingPeriod("monthly")}
          >Monthly</li>
          <li 
            className="flex items-center"
          >|</li>
          <li 
            className={`flex items-center cursor-pointer font-semibold ${statePricingPeriod=='annual'?`text-gray-900`:`text-gray-400`}`}
            onClick={()=>setStatePricingPeriod("annual")}
          >Annual <span className="ml-2 inline-block py-1 px-2 rounded-full text-fs-bodyXXXS bg-primary2 text-white uppercase font-bold">Save 17%</span></li>
        </ul>
      </div>

      {
        /**
         * 
         * Pricing block
         * 
         */
      }
      <div className="container mx-auto grid lg:grid-cols-3 gap-5 md:gap-10 py-10 md:py-20 px-5">
      {
        pricing.map( p => (
          <BlockPricing key={p.name} pricingPeriod={statePricingPeriod} pricing={p} />
        ))
      }
      </div>

    </LayoutDefault>
    
  )
}