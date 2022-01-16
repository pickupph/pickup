import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import ErrorPage from 'next/error'
import Image from 'next/image'
import Link from 'next/link'

import LayoutBrand from "../../../components/templates/layoutBrand"
import useBrand from "../../../hooks/useBrand"
import useStore from "../../../hooks/useStore"
import Loading from "../../../components/loading"


export default function Brand() {

  const router = useRouter()
  const brand_url = router.query.brandUrl
  const store_id = router.query.storeId
  
  const { _brand, _brandIsLoading, _brandIsError } = useBrand(brand_url)
  const { _store, _storeIsLoading, _storeIsError } = useStore(store_id)

  const brand = _brand
  const store = _store?.store || {}

  const [ stateActiveCategory, setStateActiveCategory ] = useState("")
  const [ stateSearch, setStateSearch ] = useState("")
  const [ stateMenu, setStateMenu ] = useState([])

  useEffect(()=>{

    setStateMenu(store?.menu)

  },[_store])

  useEffect(()=>{

    if(stateActiveCategory=="") {

      if(stateSearch=="") {
        setStateMenu(store?.menu)
      } else {
        let regex = new RegExp(stateSearch,'gi')
        setStateMenu(store?.menu.filter(item=>item.item_id.name.match(regex)))
      }

    } else {

      if(stateSearch=="") {
        setStateMenu(store.menu.filter(item=>item.category==stateActiveCategory))
      } else {
        let regex = new RegExp(stateSearch,'gi')
        setStateMenu(store.menu.filter(item=>item.category==stateActiveCategory && item.item_id.name.match(regex)))
      }

    }
    

  }, [stateActiveCategory, stateSearch])

  if(_storeIsLoading) {
    return <Loading />
  }

  if(_storeIsError || _brand.result=="error") {
    return <ErrorPage statusCode={404} />
  }

  return (
    <LayoutBrand>

      {/** Header branch */}
      <section className="p-5 flex space-x-5 border-b">

        <div className="relative min-h-[60px] min-w-[60px]">
          <Link href={`/brands/${brand.brand_url}`}>
            <a className="relative min-h-[60px] min-w-[60px] block"><Image src={brand.brand_logo} layout="fill" className="object-contain" /></a>
          </Link>
        </div>
      
        <div className="flex-grow items-center flex justify-between">
          <p className="text-[20px]">
            <Link href={`/brands/${brand.brand_url}`}>
              <a className="font-bold">{brand.name}</a>
            </Link>
            &nbsp; - {store.location}
          </p>
          <p className="text-[20px] hidden md:block"><a href={`tel:${store.contact_number}`} className="px-5 py-3 border rounded-lg bg-[#f4f4f4] hover:bg-[#cccccc] transition-all duration-300 ease-in-out">{store.contact_number}</a></p>
        </div>
        
      </section>

      <div className="px-5 mx-auto py-5 border-b">
        <div className="">
          
          <ul className="flex justify-between space-x-5 flex-grow items-center">
            <li>
              <form>
                <input type="text" name="search" placeholder="Search" className="border-[#cccccc]" value={stateSearch} onChange={e=>setStateSearch(e.target.value)} />
              </form>
            </li>
            <li className={`${stateActiveCategory==""?`font-bold`:``}`}>
              <a href="#" onClick={e=>setStateActiveCategory("")}>All</a>
            </li>
            {
              store.categories.map((category,i)=>(
                <li key={i} className="px-5"><a href="#" onClick={e=>setStateActiveCategory(category.category_name)} className={`${stateActiveCategory==category.category_name?`font-bold`:``}`}>{category.category_name}</a></li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="p-5 bg-[#f4f4f4]">
         Found {stateMenu?.length} items{stateActiveCategory!==""?` in category ${stateActiveCategory}`:``}{stateSearch!==""?` with search ${stateSearch}`:``}.
      </div>

      <div className="p-5">
        <ul className="grid gap-5 grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {
            stateMenu?.map((item,i)=>(
              <li key={i} className="border border-[#cccccc] block">
                <div className="relative object-contain min-h-[100px] w-full">
                  <Image src={item.item_id.image_url} layout="responsive" width={100} height={100} />
                </div>
                <h3 className="p-5">
                  {item.item_id.name}
                </h3>
              </li>
            ))
          }
        </ul>
      </div>

    </LayoutBrand>
  )
}