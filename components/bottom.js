// Packages
import { useState } from 'react'
import Link from 'next/link'

// Data
// 
// Todo: Refactor/Merge data into 1 array
//
import dataMenuCompany from '../fakeData/menuCompanyItems.json'
import dataMenuPartnerships from '../fakeData/menuPartnershipsItems.json'
import dataMenuSupport from '../fakeData/menuSupportItems.json'
import dataMenuLegal from '../fakeData/menuLegalItems.json'
import { IconArrowDown } from './templates/icons'

export default function Bottom({ className }) {

  const [ stateCompanyVisibility, setStateCompanyVisibility ] = useState(false)
  const [ statePartnershipsVisibility, setStatePartnershipsVisibility ] = useState(false)
  const [ stateSupportVisibility, setStateSupportVisibility ] = useState(false)
  const [ stateLegalVisibility, setStateLegalVisibility ] = useState(false)

  return (
    <section className={`p-5 w-full ${className}`}>
      <div className="container mx-auto">

        <div className="flex flex-col items-start md:flex-row space-y-5 md:space-y-0 md:space-x-28 lg:space-x-36">
          
          {/** Company */}
          <div className="w-full md:w-auto">
            <h3 className={`text-[16px] flex items-center justify-between ${stateCompanyVisibility ? `text-primary2 md:text-heroHeader` : `text-heroHeader`} mb-0 md:mb-3 cursor-pointer`} onClick={()=>setStateCompanyVisibility(stateCompanyVisibility ? false : true)}>
              <span>Company</span>
              <IconArrowDown className={`inline-block md:hidden text-heroHeader transition-all duration-300 ease-in-out  transform ${stateCompanyVisibility ? `rotate-180` : ``}`} />
            </h3>
            <ul className={`${stateCompanyVisibility ? `max-h-[182px]` : `max-h-0`} overflow-hidden md:max-h-[182px] transition-all ease-in-out duration-300 pl-4 md:pl-0`}>
              {
                dataMenuCompany.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/** Partnership */}
          <div className="w-full md:w-auto">
            <h3 className={`text-[16px] flex items-center justify-between ${statePartnershipsVisibility ? `text-primary2 md:text-heroHeader` : `text-heroHeader`} mb-0 md:mb-3 cursor-pointer`} onClick={()=>setStatePartnershipsVisibility(statePartnershipsVisibility ? false : true)}>
              <span>Partnerships</span>
              <IconArrowDown className={`inline-block md:hidden text-heroHeader transition-all duration-300 ease-in-out  transform ${statePartnershipsVisibility ? `rotate-180` : ``}`} />
            </h3>
            <ul className={`${statePartnershipsVisibility ? `max-h-[182px]` : `max-h-0`} overflow-hidden md:max-h-[182px] transition-all ease-in-out duration-300 pl-4 md:pl-0`}>
              {
                dataMenuPartnerships.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/** Support*/}
          <div className="w-full md:w-auto">
            <h3 className={`text-[16px] flex items-center justify-between ${stateSupportVisibility ? `text-primary2 md:text-heroHeader` : `text-heroHeader`} mb-0 md:mb-3 cursor-pointer`} onClick={()=>setStateSupportVisibility(stateSupportVisibility ? false : true)}>
              <span>Support</span>
              <IconArrowDown className={`inline-block md:hidden text-heroHeader transition-all duration-300 ease-in-out  transform ${stateSupportVisibility ? `rotate-180` : ``}`} />
            </h3>
            <ul className={`${stateSupportVisibility ? `max-h-[182px]` : `max-h-0`} overflow-hidden md:max-h-[182px] transition-all ease-in-out duration-300 pl-4 md:pl-0`}>
              {
                dataMenuSupport.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

         {/** Legal*/}
         <div className="w-full md:w-auto">
            <h3 className={`text-[16px] flex items-center justify-between ${stateLegalVisibility ? `text-primary2 md:text-heroHeader` : `text-heroHeader`} mb-0 md:mb-3 cursor-pointer`} onClick={()=>setStateLegalVisibility(stateLegalVisibility ? false : true)}>
              <span>Legal</span>
              <IconArrowDown className={`inline-block md:hidden text-heroHeader transition-all duration-300 ease-in-out  transform ${stateLegalVisibility ? `rotate-180` : ``}`} />
            </h3>
            <ul className={`${stateLegalVisibility ? `max-h-[182px]` : `max-h-0`} overflow-hidden md:max-h-[182px] transition-all ease-in-out duration-300 pl-4 md:pl-0`}>
              {
                dataMenuLegal.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}