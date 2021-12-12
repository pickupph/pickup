// Packages
import Link from 'next/link'
import Image from 'next/image'
import { IconArrowDown } from '../../components/templates/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import moment from 'moment'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

// Helpers
import { WP_API_URL, WP_PER_PAGE } from '../../config/constants'

// Components
import LayoutBasic from "../../components/templates/layoutBasic"

// Data
import { setTerm } from '../../store/searchSlice'
import LayoutBlog from '../../components/templates/layoutBlog'
import { width } from 'tailwindcss/defaultTheme'


export default function Blog({ collection }) {

  const { term } = useSelector(state=>state.search)
  const [ stateFaqs, setStateFaqs ] = useState(collection)
  const dispatch = useDispatch()
  
  const timeAgo = new TimeAgo('en-US')

  useEffect(()=>{

    setTerm("")

  }, [])

  useEffect(()=>{

    if(term) { 
      let pattern = new RegExp(term, 'i')
      setStateFaqs(collection.filter(faq=>faq.title.rendered.match(pattern)))
    }

  }, [ term ])

  return (
    <LayoutBlog
      meta={{
        title: "Blog" 
      }}
    >

      {
        // console.log(collection)
      }

      {/** Latest blog */}
      <section className="py-[56px]">
        <div className="container mx-auto w-full">
          <div className="flex items-center group space-x-10">
            <div>
              <div className="flex space-x-5">
                <span className="text-[18px] text-[#20202] font-semibold">7 min read</span>
                <span className="font-semibold text-[18px] text-[#8a86e5]">Category</span>
              </div>
              <h1 className="text-[72px] font-bold leading-tight tracking-tight text-[#202020] my-3">
                <Link href={`/blog/${collection[0].slug}`}>
                  <a 
                    className="bg-no-repeat group-hover:bg-gradient-to-r from-[#28bf7b] via-[#2ed3ba] via-[#44c2d7] via-[#5aa2dc] to-[#8a86e5] bg-bottom bg-[length:100%_8px]"
                    style={{textShadow: `white 4px 4px, white 4px -4px, white -4px 4px, white -4px -4px`}}
                  >{collection[0].title.rendered}</a>
                </Link>
              </h1>
              <div>
                <div>{collection[0]._embedded.author[0].name}</div>
                <div>{moment(collection[0].date).format('MMM Do, YYYY')}</div>
              </div>
            </div>
            <div className="pt-[16px]">
              <div className="bg-gradient-to-b from-[#28bf7b] via-[#2ed3ba] via-[#44c2d7] via-[#5aa2dc] to-[#8a86e5] rounded-sm">
                <Link href={`/blog/${collection[0].slug}`}>
                  <a className="transition-all duration-500 ease-out relative inline-block right-[16px] bottom-[12px] group-hover:right-[9px] group-hover:bottom-[4px]">
                    <Image 
                      className="rounded-sm block"
                      src={collection[0]._embedded['wp:featuredmedia'][0].source_url} 
                      width={collection[0]._embedded['wp:featuredmedia'][0].media_details.width}
                      height={collection[0]._embedded['wp:featuredmedia'][0].media_details.height}
                      alt={collection[0]._embedded['wp:featuredmedia'][0].alt_text}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </LayoutBlog>
    
  )
}

export async function getStaticProps() {

  /**
   * Pull Blog posts collection
   */
  const collection = await fetch(`${WP_API_URL}/wp/v2/posts?per_page=${WP_PER_PAGE}&_embed`).then(res => res.json())

  return {
    props: {
      collection,
    },
    revalidate: 10
  }

}
