//
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'

//
import useBlogCategory from '../hooks/useBlogCategory'

//
import IsLoading from './isLoading'

export default function BlogItemBanner({ blogItem, className }) {

  const { category, categoryIsLoading, categoryIsError }  = useBlogCategory(blogItem?.categories[0])

  if(!blogItem) {
    return <p>No data.</p>
  }

  if(categoryIsLoading) {
    return <IsLoading />
  }

  return (
    <section className={`py-[28px] md:py-[56px] ${className}`}>
      <div className="container mx-auto w-full">
        <div className="flex items-center group space-x-10 flex-col md:flex-row">
          <div>
            <div className="flex space-x-5 px-5">
              <span className="text-[18px] text-[#202020] font-semibold">7 min read</span>
              <span className="font-semibold text-[18px] text-[#8a86e5]"><Link href={`/blog/${category?.slug}`}><a>{category?.name}</a></Link></span>
            </div>
            <h1 className="text-[36px] md:text-[72px] font-bold leading-tight tracking-tight text-[#202020] my-3 px-5">
              <Link href={`/blog/${category?.slug}/${blogItem?.slug}`}>
                <a 
                  className="bg-no-repeat group-hover:bg-gradient-to-r from-[#28bf7b] via-[#2ed3ba] via-[#44c2d7] via-[#5aa2dc] to-[#8a86e5] bg-bottom bg-[length:100%_8px]"
                  style={{textShadow: `white 4px 4px, white 4px -4px, white -4px 4px, white -4px -4px`}}
                >{blogItem.title.rendered}</a>
              </Link>
            </h1>
            <div className='px-5'>
              <div>{blogItem?._embedded.author[0].name}</div>
              <div>{moment(blogItem.date).format('MMM Do, YYYY')}</div>
            </div>
          </div>
          <div className="pt-[16px]">
            <div className="bg-gradient-to-b from-[#28bf7b] via-[#2ed3ba] via-[#44c2d7] via-[#5aa2dc] to-[#8a86e5] rounded-sm">
              <Link href={`/blog/${blogItem.slug}`}>
                <a className="transition-all duration-500 ease-out relative inline-block right-[16px] bottom-[12px] group-hover:right-[9px] group-hover:bottom-[4px]">
                  <Image 
                    className="rounded-sm block"
                    src={blogItem?._embedded['wp:featuredmedia'][0]?.source_url} 
                    width={blogItem?._embedded['wp:featuredmedia'][0]?.media_details.width}
                    height={blogItem?._embedded['wp:featuredmedia'][0]?.media_details.height}
                    alt={blogItem?._embedded['wp:featuredmedia'][0]?.alt_text}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}