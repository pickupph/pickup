import Image from 'next/image'

export default function CardBlogItem({ item }) {
	return (
		<div>
			<div>
				<Image 
					src={item._embedded['wp:featuredmedia'][0].source_url} 
					width={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.width}
					height={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.height}
					alt={item._embedded['wp:featuredmedia'][0].alt_text}
					className='w-full'
					layout='responsive'
				/>
			</div>
			<div className='py-5'>
				<h3 className='text-[20px] font-semibold'>{item.title.rendered}</h3>
			</div>
		</div>
	)
}