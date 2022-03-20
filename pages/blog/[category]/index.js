// Packages
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

// Helpers
import { WP_API_URL, WP_PER_PAGE } from '../../../config/constants'

// Data
import LayoutBlog from '../../../components/templates/layoutBlog'
import BlogItemBanner from '../../../components/blogItemBanner'
import BlogItemsWaterfall from '../../../components/blogItemsWaterfall'
import BlogItemsAlternate from '../../../components/blogItemsAlternate'

export default function BlogCategory({ collection, collection2ndTo4th, collection4thOnwards }) {

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

export async function getStaticProps({ params }) {

  /**
   * Pull Blog posts collection
   */
  const currCategorySlug = params.category
  const currCategory = await fetch(`${WP_API_URL}/wp/v2/categories?slug=${currCategorySlug}`).then(res=>res.json())

  const collection = await fetch(`${WP_API_URL}/wp/v2/posts?categories=${currCategory[0].id}&per_page=${WP_PER_PAGE}&_embed`).then(res => res.json())
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

export async function getStaticPaths() {

  const categories = await fetch(`${WP_API_URL}/wp/v2/categories/?per_page=${WP_PER_PAGE}`).then(res => res.json())

  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }))

  return { paths, fallback: 'blocking' }
}