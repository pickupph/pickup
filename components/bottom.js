// Packages
import Link from 'next/link'

// Data
import dataMenuCompany from '../fakeData/menuCompanyItems.json'
import dataMenuPartnerships from '../fakeData/menuPartnershipsItems.json'
import dataMenuSupport from '../fakeData/menuSupportItems.json'
import dataMenuLegal from '../fakeData/menuLegalItems.json'

export default function Bottom({ className }) {
  return (
    <section className={`p-5 ${className}`}>
      <div className="container mx-auto">

        <div className="flex flex-col items-start md:flex-row space-y-5 md:space-y-0 md:space-x-28 lg:space-x-40">
          <div>
            <h3 className="text-[16px] text-heroHeader mb-4">Company</h3>
            <ul>
              {
                dataMenuCompany.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] text-heroHeader">Partnerships</h3>
            <ul>
              {
                dataMenuPartnerships.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] text-heroHeader">Support</h3>
            <ul>
              {
                dataMenuSupport.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] text-heroHeader">Trust &amp; Legal</h3>
            <ul>
              {
                dataMenuLegal.map((m,i)=>(
                  <li key={i} className="text-[14px] my-2">
                    <Link href={m.url}>
                      <a className="hover:underline">{m.label}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}