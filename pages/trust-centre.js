// Packages
import Link from 'next/link'

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import Bottom from '../components/bottom'

export default function TrustCentre() {

  return (
    <LayoutDefault
      meta={{
        title: "Trust Centre"
      }}
      classNameMain="flex items-center flex-col"
    >

      <div className="container mx-auto px-5 py-5 md:py-10 max-w-[700px] mb-[64px]">
        <h1 className="text-[40px]">Trust Centre</h1>
        <p className="text-[16px] leading-relaxed">We take data security and privacy seriously at Pickup.ph. In the Trust Center you'll find general information to give you confidence in the way we store the data you entrust to us.</p>
        <ul className="mt-6 list-disc list-inside">
          {
            [
              {
                "label": "Privacy Policy",
                "url": "/privacy-policy"
              },
              {
                "label": "Terms of Service",
                "url": "/terms-of-service"
              },
            ].map((item, i)=>(
              <li key={i}>
                <Link href={item.url}>
                  <a className="underline inline-block my-[2px]">{item.label}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      {/** */}
      <Bottom className="mb-10 md:mb-20" />

    </LayoutDefault>
    
  )
}