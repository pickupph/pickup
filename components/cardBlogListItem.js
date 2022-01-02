//
import BlogFeaturedMedia from "./blogFeaturedMedia"

export default function CardBlogListItem({ item, position, className }) {
  return (
    <div className={`grid grid-cols-2 ${className}`}>
      <div className={`grid gap-5 md:grid-cols-2 items-center ${position==`even`?`order-1`:`order-2`}`}>
        <div>
          <BlogFeaturedMedia item={item} />
        </div>
        <div>
          <h3 className='text-[20px] font-semibold'>{item.title.rendered}</h3>
        </div>
      </div>
      <div className={`${position==`even`?`order-2`:`order-1`}`}>&nbsp;</div>
    </div>
    
  )
}