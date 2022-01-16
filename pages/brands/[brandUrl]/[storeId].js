import { useEffect } from "react"
import { useRouter } from "next/router"
import ErrorPage from 'next/error'
import Image from 'next/image'
import Link from 'next/link'

import LayoutBrand from "../../../components/templates/layoutBrand"
import useBrand from "../../../hooks/useBrand"
import useStore from "../../../hooks/useStore"


export default function Brand() {

  const router = useRouter()
  const brand_url = router.query.brandUrl
  const store_id = router.query.storeId
  
  const { _brand, _brandIsLoading, _brandIsError } = useBrand(brand_url)
  const { _store, _storeIsLoading, _storeIsError } = useStore(store_id)
  console.log(_brand)

  const brand = _brand
  const store = _store.store

  console.log('store: ', store)


  if(_storeIsLoading) {
    return <p>Loading</p>
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
            <a><Image src={brand.brand_logo} layout="fill" className="object-contain" height={80} width={200} /></a>
          </Link>
        </div>
      
        <div className="flex-grow items-center flex">
          <p className="text-[20px]">
            <Link href={`/brands/${brand.brand_url}`}>
              <a className="font-bold">{brand.name}</a>
            </Link>
            &nbsp; - {store.location}
          </p>
        </div>
        
      </section>

    </LayoutBrand>
  )
}