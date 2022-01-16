import { useEffect } from "react"
import { useRouter } from "next/router"
import ErrorPage from 'next/error'
import Image from 'next/image'
import Link from 'next/link'

import LayoutBrand from "../../../components/templates/layoutBrand"
import useBrand from "../../../hooks/useBrand"
import Loading from "../../../components/loading"


export default function Brand() {

  const router = useRouter()
  const brand_url = router.query.brandUrl
  
  const { _brand, _brandIsLoading, _brandIsError } = useBrand(brand_url)
  console.log(_brand)

  const brand = _brand

  useEffect(()=>{



  }, [_brand])

  if(_brandIsLoading) {
    return <Loading />
  }

  if(_brandIsError || _brand.result=="error") {
    return <ErrorPage statusCode={404} />
  }

  return (
    <LayoutBrand
      classNameMain={`flex flex-col min-h-screen w-full items-center justify-center`}
    >


      {/** Header branch */}
      <section className="p-5 flex flex-col space-y-5">

        <div className="relative min-h-[100px] min-w-[100px]">
          <Image src={brand.brand_logo} layout="fill" className="object-contain" height={80} width={200} />
        </div>
      
        <div className="flex-grow items-center flex">
          <p className="font-bold text-[40px]">{brand.name}</p>
        </div>
        
      </section>


      {/** Stores */}
      <div>
        {
          brand.stores.length > 0 ?
          <div className="text-center">
            <h3 className="text-[20px] mb-5">Store Locations:</h3>
            {
              brand.stores.map(store=>(
                <div key={store._id} className="border py-3 px-5 rounded-lg transition-all ease-in-out duration-300 hover:bg-[#cccccc]">
                  <p>
                    <Link href={`/brands/${brand.brand_url}/${store._id}`}><a>{store.geocode_address_string}</a></Link>
                  </p>
                </div>
              ))
            }
          </div> :
          <div><p>No store found.</p></div>
        }
      </div>

    </LayoutBrand>
  )
}