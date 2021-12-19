//
import Link from 'next/link'

// Components
import FormCharities from '../components/formCharities'
import LayoutDefault from "../components/templates/layoutDefault"

// 
import { SITE_NAME } from "../config/constants"

export default function Charities() {

  return (
    <LayoutDefault
      meta={{
        title: "Charities"
      }}
      classNameMain={`md:py-10`}
    >

      <div className="container mx-auto px-5 py-5 md:py-10 max-w-[780px]">
        <h1 className="text-[26px] md:text-[32px] mb-[20px]">{SITE_NAME} for Charities</h1>
        <h2 className="text-[28px] md:text-[38px] mb-[30px] leading-tight">Are you a charitable organization?</h2>
        <p className="mb-[20px]">We have great respect for the work you do, so all authorized charities get free {SITE_NAME} PRO.</p>
        <p className="mb-[20px]">You need to have an existing {SITE_NAME} free account to be eligible. <Link href="/signup"><a className='underline'>Create one here</a></Link> first. Then, take a minute to fill out the form below. Once we've reviewed your answers, you'll be upgraded to PRO - free, for life.</p>
      </div>

      <div className="container mx-auto px-5 max-w-[780px]">
        <FormCharities />
      </div>

    </LayoutDefault>
    
  )
}