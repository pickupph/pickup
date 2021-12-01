import Link from 'next/link'
import Image from 'next/image'

import FormSearch from './formSearch'

export default function HeaderLayoutBasic() {
  return (
    <header className="bg-primary2 py-[25px]">
      <div className="max-w-narrowMD mx-auto space-y-[20px] px-5">

        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a><Image src="/images/logo-square.png" alt="Pickup PH" width={35} height={35} /></a>
            </Link>
          </div>

          <div>
            <Link href="/">
              <a className="text-white font-semibold">Go to Homepage</a>
            </Link>
          </div>
        </div>


        <div>
          <FormSearch />
        </div>

      </div>
    </header>
  )
}