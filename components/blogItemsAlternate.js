import CardBlogListItem from "./cardBlogListItem";

export default function BlogItemsAlternate({ collection, className }) {
  return(
    <section className={`py-[28px] md:py-[56px] px-5 ${className}`}>
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