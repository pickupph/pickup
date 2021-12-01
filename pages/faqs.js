// Packages
import Link from 'next/link'
import Image from 'next/image'
import slugify from 'slugify'
import { IconArrowDown } from '../components/templates/icons'
import { useSelector } from 'react-redux'

// Components
import LayoutBasic from "../components/templates/layoutBasic"

// Data
import dataFAQs from '../fakeData/faqs.json'
import { useEffect, useState } from 'react'



export default function Home() {

  const { term } = useSelector(state=>state.search)
  const [ stateFaqs, setStateFaqs ] = useState(dataFAQs)

  useEffect(()=>{

    if(term) { 
      let pattern = new RegExp(term, 'i')
      setStateFaqs(dataFAQs.filter(faq=>faq.title.match(pattern)))
    }

  },[ term ])

  return (
    <LayoutBasic
      meta={{
        title: "FAQs | Pickup PH help center" 
      }}
      className="bg-[#f3f5f7]"
    >

      <div className="m-5 mt-10 max-w-narrowMD mx-auto text-[14px] flex items-center space-x-2 px-5">
        <Link href="/"><a>Home</a></Link>
        <IconArrowDown color="#cccccc" className="-rotate-90 h-5 w-5 items-center" />
        <span>FAQs</span>
      </div>

      <div className="max-w-narrowMD mx-auto px-5">
        <div className={` px-[30px] py-5 md:py-10 bg-[#ebeef1] rounded-md my-5`}>

          <div className="inline-flex space-x-8 items-center justify-between mb-5">
            <div className="p-5 md:p-10">
              <Image src="/images/icon-help.png" height={48} width={48} alt="Help" />
            </div>
            <div>
              <h1 className="text-[33px] text-[#3a3c4c]">FAQs</h1>
              <p className="text-[16px]">Pick your plan, you can always change later.</p>
            </div>
          </div>

          <div className="text-[18px] font-semibold mb-3">
            FAQs
          </div>

          <div>
            <ul className="grid rounded-lg overflow-hidden hover:shadow-md border border-[#d4dadf] gap-[1px] bg-[#d4dadf]">
              
            {
              stateFaqs.map((item, i)=>(
                <li key={i} className="">
                  <Link href={`/faqs/${slugify(item.title, {lower: true})}`}>
                    <a className="bg-white p-[30px] block text-primary2 text-[18px]">
                      <div className="mb-2">
                        {item.title}
                      </div>
                      <div className="text-[13px] text-[#8f919d] flex items-center space-x-4">
                        <div className="">
                          <div className="h-[32px] w-[32px] bg-primary2 text-white text-[18px] font-bold rounded-full flex items-center justify-center">C</div>
                        </div>
                        <div>
                          Written by <span className="text-[#4f5e6b]">{item.author}</span><br />
                          Updated over a week ago
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))
            }
            </ul>
          </div>

        </div>  
      </div>

    </LayoutBasic>
    
  )
}