// Components
import FormAmbassador from "../components/formAmbassador"
import LayoutDefault from "../components/templates/layoutDefault"

export default function Testimonials() {

  return (
    <LayoutDefault
      meta={{
        title: "Ambassador"
      }}
      classNameMain={`md:py-10`}
    >

      <div className="container mx-auto px-5 py-5 md:py-10 max-w-[780px]">
        <h1 className="text-[26px] md:text-[36px] mb-[30px]">Apply to become a Pickup.ph Ambassador!</h1>
        <h2 className="text-[28px] md:text-[44px] mb-[40px] leading-tight">Are you a Pickup.ph champion, have a proven audience and connect with our mission to leave the internet better than we found it?</h2>
        <p className="mb-[20px]">We're inviting Pickup.ph users to apply to be an ambassador and further spread the link love across the globe!</p>
        <p className="mb-[20px]">Share your details below and we'll reach out if you're successful.</p>
      </div>

      <div className="container mx-auto px-5 max-w-[780px]">
        <FormAmbassador />
      </div>

    </LayoutDefault>
    
  )
}