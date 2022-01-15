import CardBlogListItem from "./cardBlogListItem";

export default function BlogItemsAlternate({ collection, className }) {

  if(collection?.length==0 || !collection) {
    return <></>
  }
  
  return(
    <section className={`md:py-[56px] px-5 ${className}`}>
      <div className="container mx-auto w-full">
        <ul>
          {
            collection.map((item, i)=>(
              <li key={i} className="mb-5">
                <CardBlogListItem position={i%2==0?`even`:`odd`} item={item} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}