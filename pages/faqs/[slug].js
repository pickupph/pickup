// Packages
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconArrowDown } from '../../components/templates/icons'
import { useDispatch, useSelector } from 'react-redux'

// Helpers
import { WP_API_URL, WP_PER_PAGE } from '../../config/constants'

// Components
import LayoutBasic from "../../components/templates/layoutBasic"

// Data
import { setTerm } from '../../store/searchSlice'

export default function Faqs({ faq, collection }) {

  const { term } = useSelector(state=>state.search)
  const [ stateFaqs, setStateFaqs ] = useState(collection)
  const dispatch = useDispatch()

  useEffect(()=>{

    if(term) { 
      let pattern = new RegExp(term, 'i')
      setStateFaqs(collection.filter(faq=>faq.title.rendered.match(pattern)))
    }

  },[ term ])

  if(term) {

    return (
      <LayoutBasic
        meta={{
          title: `Search: ${term}`
        }}
        className="bg-[#f3f5f7]"
      >

        <div className="m-5 mt-10 max-w-narrowMD mx-auto text-[14px] flex items-center space-x-2 px-5">
          <Link href="/"><a>Home</a></Link>
          <IconArrowDown color="#cccccc" className="-rotate-90 h-5 w-5 items-center" />
          <Link href="/faqs"><a>FAQs</a></Link>
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
              { 
                stateFaqs.length > 0 ?
                  <ul className="grid rounded-lg overflow-hidden hover:shadow-md border border-[#d4dadf] gap-[1px] bg-[#d4dadf]">
                    
                  {
                    stateFaqs.map((item, i)=>{

                      //
                      // Prepare data from WP
                      //
                      let title = item.title.rendered
                      let link = `/faqs/${item.slug}`
                      let author = {
                        name: item._embedded.author[0].name,
                        image: {
                          src: item._embedded.author[0].avatar_urls[48]
                        }
                      }

                      return(
                        <li key={i} className="">
                          <Link href={link}>
                            <a 
                              className="bg-white p-[30px] block text-primary2 text-[18px]"
                              onClick={()=>dispatch(setTerm(""))}
                            >
                              <div className="mb-2">
                                {title}
                              </div>
                              <div className="text-[13px] text-[#8f919d] flex items-center space-x-4">
                                <div className="">
                                  <div className="h-[32px] w-[32px] bg-primary2 text-white text-[18px] font-bold rounded-full flex items-center justify-center">
                                    <Image src={author.image.src} height={32} width={32} alt={author.name} />
                                  </div>
                                </div>
                                <div>
                                  Written by <span className="text-[#4f5e6b]">{author.name}</span><br />
                                  Updated over a week ago
                                </div>
                              </div>
                            </a>
                          </Link>
                        </li>
                      )
                    })
                  }
                  </ul> :
                  <div>No search result found for <span className="italic">{`${term}.`}</span></div>
                }
            </div>

          </div>  
        </div>

      </LayoutBasic>
    )
  }

  return (
    <LayoutBasic
      meta={{
        title: faq.title
      }}
      className="bg-[#f3f5f7]"
    >

      <div className="m-5 mt-10 max-w-narrowMD mx-auto text-[14px] flex items-center space-x-2 px-5">
        <Link href="/"><a>Home</a></Link>
        <IconArrowDown color="#cccccc" className="-rotate-90 h-5 w-5 items-center" />
        <Link href="/faqs"><a>FAQs</a></Link>
        <IconArrowDown color="#cccccc" className="-rotate-90 h-5 w-5 items-center" />
        <span className={`truncate text-[#8f919d]`}>{faq.title}</span>
      </div>

      <div className="max-w-narrowMD mx-auto px-5">
        <div className={` px-[30px] py-5 md:py-10 bg-white rounded-md my-5`}>

          <div className={`max-w-[640px] mx-auto`}>
            <h1 className={`text-[33px] mb-5`}>{faq.title}</h1>

            <div className="text-[13px] text-[#8f919d] flex items-center space-x-4 mb-5">
              <div className="">
                <div className="h-[32px] w-[32px] bg-primary2 text-white text-[18px] font-bold rounded-full flex items-center justify-center overflow-hidden">
                  <Image src={faq.author.image.src} height={32} width={32} alt={faq.author.name} />
                </div>
              </div>
              <div>
                Written by <span className="text-[#4f5e6b]">{faq.author.name}</span><br />
                Updated over a week ago
              </div>
            </div>

            <div className="leading-relaxed editor" dangerouslySetInnerHTML={{__html: faq.content}} />

          </div>

        </div>  
      </div>

    </LayoutBasic>
    
  )
}

export async function getStaticProps({ params }) {

  // Get data
  const slug = params.slug
  const faqData = await fetch(`${WP_API_URL}/wp/v2/faqs?slug=${slug}&per_page=${WP_PER_PAGE}&_embed`).then(res => res.json())
  const collection = await fetch(`${WP_API_URL}/wp/v2/faqs?per_page=${WP_PER_PAGE}&_embed`).then(res => res.json())

  // Prepare data
  const faq = {
    title: faqData[0].title.rendered,
    content: faqData[0].content.rendered,
    author: {
      name: faqData[0]._embedded.author[0].name,
      image: {
        src: faqData[0]._embedded.author[0].avatar_urls[48]
      }
    }
  }

  // Send data
  return {
    props: {
      faq,
      collection
    },
    revalidate: 10,
    notFound: faqData.length > 0 ? false : true
  }
}

export async function getStaticPaths() {

  const faqs = await fetch(`${WP_API_URL}/wp/v2/faqs/?per_page=${WP_PER_PAGE}`).then(res => res.json())

  const paths = faqs.map((faq) => ({
    params: { slug: faq.slug },
  }))

  return { paths, fallback: 'blocking' }
}


