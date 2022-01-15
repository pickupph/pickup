import CardBlogItem from "./cardBlogItem"

export default function BlogItemsWaterfall({ collection, className }) {

  if(collection?.length==0 || !collection) {
    return <></>
  }

  return (
    <section className={`py-[28px] md:py-[56px] px-5 ${className}`}>
      <div className="container mx-auto w-full">
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-[15px] sm:gap-[30px] justify-center'>
        {
          collection.map((item,i)=>(
            <li key={i} className={`md:min-h-[600px] flex flex-col ${i==1?`md:justify-center`:``} ${i==2?`md:justify-end`:``}`}>
              <CardBlogItem item={item} />
            </li>
          ))
        }
        </ul>
      </div>
    </section>
  )
}