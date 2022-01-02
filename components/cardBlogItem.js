import Image from 'next/image'
import Link from 'next/link'
import useBlogCategory from '../hooks/useBlogCategory'
import IsLoading from './isLoading'

export default function CardBlogItem({ item }) {

	const { category, categoryIsLoading, categoryIsError }  = useBlogCategory(item.categories[0])

  if(categoryIsLoading) {
    return <IsLoading />
  }

	return (
		<div>
			<div>
				<Link href={`/blog/${category.slug}/${item.slug}`}>
					<a>
						<Image 
							src={item._embedded['wp:featuredmedia'][0].source_url} 
							width={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.width}
							height={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.height}
							alt={item._embedded['wp:featuredmedia'][0].alt_text}
							className='w-full'
							layout='responsive'
						/>
					</a>
				</Link>
			</div>
			<div className='py-5'>
				<h3 className='text-[20px] font-semibold'>
					<Link href={`/blog/${category.slug}/${item.slug}`}><a>{item.title.rendered}</a></Link>
				</h3>
			</div>
		</div>
	)
}