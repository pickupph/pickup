//
import Link from 'next/link'
import TimeAgo from 'javascript-time-ago'
import Image from 'next/image'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

//
import useBlogCategory from '../../../hooks/useBlogCategory'

// Helpers
import { WP_API_URL, WP_PER_PAGE } from '../../../config/constants'

// Data
import LayoutBlog from '../../../components/templates/layoutBlog'

export default function BlogItem({ blogItem }) {

  const { category, categoryIsLoading, categoryIsError }  = useBlogCategory(blogItem?.categories[0])

  const post = {
    title: blogItem.title.rendered,
    category: category?.name,
    content: blogItem.content.rendered,
    featuredImage: blogItem._embedded['wp:featuredmedia'] ? {
      src: blogItem._embedded['wp:featuredmedia'][0].source_url,
      width: blogItem._embedded['wp:featuredmedia'][0].media_details.width,
      height: blogItem._embedded['wp:featuredmedia'][0].media_details.height,
      alt: blogItem._embedded['wp:featuredmedia'][0].alt_text
    } : null
  }

  return (
    <LayoutBlog
      meta={{
        title: "Blog" 
      }}
    >

      <div className='max-w-[820px] mt-[30px] md:mt-[50px]'>

        <div className="flex space-x-5 px-5 text-center justify-center md:mb-[20px]">
          <span className="text-[18px] text-[#202020] font-semibold">7 min read</span>
          <span className="font-semibold text-[18px] text-[#8a86e5]"><Link href={`/blog/${category?.slug}`}><a>{category?.name}</a></Link></span>
        </div>

        <div className='px-5'>
          <p className='text-[40px] md:text-[60px] leading-tight font-bold text-center'>{post.title}</p>
        </div>

        {
          post.featuredImage ? 
            <div className='my-[20px] md:my-[50px]'>
              <Image layout='responsive' src={post.featuredImage.src} width={post.featuredImage.width} height={post.featuredImage.height} alt={post.featuredImage.alt} />
            </div> :
            null
        }

        <div className='mt-[20px] md:mt-[50px] text-[20px] leading-relaxed px-5' dangerouslySetInnerHTML={{__html: post.content}} />

      </div>

    </LayoutBlog>
    
  )
}

export async function getStaticProps({ params }) {

  /**
   * Pull Blog posts collection
   */
  const slug = params.post

  const blogItem = await fetch(`${WP_API_URL}/wp/v2/posts?slug=${slug}&per_page=${WP_PER_PAGE}&_embed`).then(res => res.json())

  return {
    props: {
      blogItem: blogItem.length > 0 ? blogItem[0] : {},
    },
    revalidate: 10
  }

}

export async function getStaticPaths() {

  const posts = await fetch(`${WP_API_URL}/wp/v2/posts/?per_page=${WP_PER_PAGE}`).then(res => res.json())

  let paths = []

  posts.forEach( async post => {

    const cat = await fetch(`${WP_API_URL}/wp/v2/categories/${post.categories[0]}`).then(res=>res.json())

    paths.push({
      params: {
        category: cat.slug,
        post: post.slug 
      }
    })

  })

  return { paths, fallback: 'blocking' }
}