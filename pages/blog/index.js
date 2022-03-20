// Packages
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

// Helpers
import { WP_API_URL, WP_PER_PAGE } from '../../config/constants'

// Data
import LayoutBlog from '../../components/templates/layoutBlog'
import BlogItemBanner from '../../components/blogItemBanner'
import BlogItemsWaterfall from '../../components/blogItemsWaterfall'
import BlogItemsAlternate from '../../components/blogItemsAlternate'

export default function Blog({ collection, collection2ndTo4th, collection4thOnwards }) {

  const { term } = useSelector(state=>state.search)

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

      {/** Latest blog */}
      <BlogItemBanner blogItem={collection[0]} />

      {/** Recent */} 
      <BlogItemsWaterfall collection={collection2ndTo4th} />

      {/** Alternate */}
      <BlogItemsAlternate collection={collection4thOnwards} />

    </LayoutBlog>
    
  )
}

export async function getStaticProps() {

  /**
   * Pull Blog posts collection
   */
  const collection = await fetch(`${WP_API_URL}/wp/v2/posts?per_page=${WP_PER_PAGE}&_embed`).then(res => res.json())
  const collection2ndTo4th = collection.slice(1, 4)
  const collection4thOnwards = collection.slice(4)

  return {
    props: {
      collection,
      collection2ndTo4th,
      collection4thOnwards
    },
    revalidate: 10
  }

}
