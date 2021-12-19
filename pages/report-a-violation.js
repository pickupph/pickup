//
import Link from 'next/link'

// Components
import FormReport from '../components/formReport'
import LayoutDefault from "../components/templates/layoutDefault"

// 
import { SITE_NAME } from "../config/constants"

export default function ReportAViolation() {

  return (
    <LayoutDefault
      meta={{
        title: "Report a violation"
      }}
      classNameMain={`md:py-10`}
    >

      <div className="container mx-auto px-5 py-5 md:py-10 max-w-[780px]">
        <h1 className="text-[26px] md:text-[38px] mb-[20px]">Report a Violation - {SITE_NAME} Trust Center</h1>
        <h2 className="text-[28px] md:text-[32px] mb-[30px] leading-tight">Please use the form below to report a violation or an account you think we should review.</h2>
        <p className="mb-[20px]"><span className="font-semibold">Please use the form below to report a violation or an account you think we should review.</span> You can view our Terms of Service <Link href="/terms-of-service"><a className='underline'>here</a></Link>.</p>
        <p className="mb-[20px]">We take account violations very seriously, review all requests and take action if required.</p>
        <p className="mb-[20px]">Please note this form is not for general support requests. If you need help with your own {SITE_NAME} account, please contact support on <a href="mailto:support@pickup.ph" className='underline'>support@pickup.ph</a> or visit our <Link href="/faqs"><a className='underline'>support portal</a></Link>.</p>
      </div>

      <div className="container mx-auto px-5 max-w-[780px]">
        <FormReport />
      </div>

    </LayoutDefault>
    
  )
}