// Packages
import Link from 'next/link'

// Components
import LayoutDefault from "../components/templates/layoutDefault"

export default function TrustCentre() {

  return (
    <LayoutDefault
      meta={{
        title: "Trust Centre"
      }}
      classNameMain="flex items-center"
    >

      <div className="container mx-auto px-5 py-5 md:py-10 max-w-[700px] mb-[64px]">
        <h1 className="text-[40px]">Trust Centre</h1>
        <p className="text-[16px] leading-relaxed">We take data security and privacy seriously at Linktree. In the Trust Center you'll find general information to give you confidence in the way we store the data you entrust to us.</p>
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
              {
                "label": "Community Standards",
                "url": "/community-standards"
              }
            ].map((item, i)=>(
              <li key={i}>
                <Link href={item.url}>
                  <a className="underline inline-block my-[2px]">{item.label}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        <hr className="my-5 text-gray-300" />
        <ul className="mt-6 list-disc list-inside">
          {
            [
              {
                "label": "GDPR Request form",
                "url": "/#"
              }
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

    </LayoutDefault>
    
  )
}