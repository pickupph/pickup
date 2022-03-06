//
import Image from "next/image"

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import Section from "../components/templates/section"
import Button from "../components/templates/button"

export default function HowItWorks() {

  return (
    <LayoutDefault
      meta={{
        title: "How it works"
      }}
    >

      <Section>
        <div className="max-w-[1000px] mx-auto py-10">
          <div className="grid md:grid-cols-2 items-center gap-10 md:gap-20">
            <div className="text-center md:text-left">
              <h1 className="text-[38px] md:text-[40px] lg:text-[52px] font-semibold leading-tight mb-8">The most powerful commission-free mobile ordering</h1>
              <p className="text-[20px] lg:text-[22px] mb-8">Create an amazing branded customer experience, increase your revenue and margins while owning the customer data</p>
              <div>
                <Button type="link" link="/book-a-demo" bg="bg-primary2" className="my-5 h-buttonLg text-white hover:brightness-90">Get Started for Free</Button>
              </div>
            </div>
            <div className="text-center">
              <Image src="/images/placeholders/how-it-works.jpeg" alt="Pickup how it works" width={500} height={686} className="rounded-[30px]" />
            </div>
          </div>
        </div>
      </Section>

    </LayoutDefault>
    
  )
}