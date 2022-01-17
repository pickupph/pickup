import Link from "next/link"
import useBlogCategory from "../hooks/useBlogCategory"
import BlogFeaturedMedia from "./blogFeaturedMedia"
import IsLoading from "./isLoading"

export default function CardBlogListItem({ item, position, className }) {

  const { category, categoryIsLoading, categoryIsError }  = useBlogCategory(item.categories[0])

  if(categoryIsLoading) {
    return <IsLoading />
  }

  return (
    <div className={`grid md:grid-cols-2 ${className}`}>
      <div className={`grid gap-5 md:grid-cols-2 items-center ${position==`even`?`order-1`:`order-2`}`}>
        <div>
          <Link href={`/blog/${category?.slug}/${item.slug}`}>
					  <a>
              <BlogFeaturedMedia item={item} />
            </a>
          </Link>
        </div>
        <div>
          <h3 className='text-[20px] font-semibold'>
            <Link href={`/blog/${category?.slug}/${item.slug}`}>
					    <a>{item.title.rendered}</a>
            </Link>
          </h3>
        </div>
      </div>
      <div className={`hidden md:block ${position==`even`?`order-2`:`order-1`}`}>&nbsp;</div>
    </div>
  )
}