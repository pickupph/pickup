// Packages
import { useEffect, useState } from "react"

// Components
import LayoutDefault from "../components/templates/layoutDefault"

// Data
import dataPricing from "../fakeData/pricing.json"

export default function Home() {

  const [ statePricingTier, setStatePricingTier ] = useState("multi-store")
  const [ statePricingPeriod, setStatePricingPeriod ] = useState("annual")

  useEffect(()=>{

  }, [])

  return (
    <LayoutDefault
      meta={{
        title: "Pricing"
      }}
    >

      <div className="container mx-auto px-5 py-10 text-center">
        <h1 className="text-fs-heroHeader">Pricing plans</h1>
        <p className="text-fs-body">Pick your plan, you can always change later.</p>
      </div>

      <div className="container mx-auto p-5 text-center">
        <ul className="inline-flex items-center mx-auto space-x-5 text-fs-boxBody">
          <li className={`flex items-center cursor-pointer text-gray-400 ${statePricingPeriod=="monthly"}`}>Monthly</li>
          <li className="flex items-center">|</li>
          <li className="flex items-center cursor-pointer text-gray-900">Annual <span className="ml-2 inline-block py-1 px-2 rounded-full text-fs-bodyXXXS bg-primary2 text-white uppercase font-bold">Save 17%</span></li>
        </ul>
      </div>

    </LayoutDefault>
    
  )
}