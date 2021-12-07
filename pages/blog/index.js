// Packages
import Link from 'next/link'
import Image from 'next/image'
import { IconArrowDown } from '../../components/templates/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

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
