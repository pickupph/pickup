//
import Link from "next/link"
import Image from "next/image"

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import Section from "../components/templates/section"
import Bottom from "../components/bottom"
import Divider from "../components/divider"
import StepLR from "../components/stepLR"
import StepRL from "../components/stepRL"

export default function HowItWorks() {

  return (
    <LayoutDefault
      classNameMain="bg-[#f7f7f7]"
      meta={{
        title: "How it works"
      }}
    >

      {/** */}
      <Section>
        <div className="text-center py-3 md:py-10">
          <h1 class="text-[34px] md:text-[44px] font-semibold">How to get started</h1>
        </div>
      </Section>

      {/** */}
      <Section>

        <StepLR image={{}} order={1} text="Signup" first={true} />
        <StepRL image={{}} order={2} text="Upload brand info" />
        <StepLR image={{}} order={3} text="Create your own digital menu" />
        <StepRL image={{}} order={4} text="Choose how customers can order" />
        <StepLR image={{}} order={5} text="Toggle on payment methods" />
        <StepRL image={{}} order={6} text="Add your pickup URL to socials" />
        <StepLR image={{}} order={7} text="Customers can order &amp; pay online" />
        <StepRL image={{}} order={8} text="Reap the benefits of Pickup" last={true} />

      </Section>

      <Section>
        <div className="text-center">
          <Link href="/signup">
            <a class="text-fs-button md:text-fs-buttonLg uppercase px-32px py-3 rounded-2xl font-semibold whitespace-nowrap transition duration-200 ease-in-out items-center inline-flex justify-center bg-primary2 my-5 h-buttonLg text-white hover:brightness-90" href="/signup mx-auto">Get Started for Free</a>
          </Link>
        </div>
      </Section>

      <Divider className="bg-[#f7f7f7] h-[60px]" />

      <Section className={`bg-white`}>
        
        <div className="py-[60px] text-center">
          <h2 class="text-[34px] md:text-[44px] font-semibold">What is included</h2>
          <p>A complete solution that was built with the retail user experience in-mind</p>
        </div>

        <div>
          <div className="grid md:grid-cols-2 gap-10">

            {
              [
                {
                  "title": "Intuitive design",
                  "content": "Easy to use for customers and retail staff.",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                },
                {
                  "title": "Store updates",
                  "content": "Make changes to prep-times and menus instantly.",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                },
                {
                  "title": "In-store Android app",
                  "content": "A lightning-fast native android store console. ",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                },
                {
                  "title": "Powerful reporting",
                  "content": "Gain actionable insights on your sales and customers.",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                },
                {
                  "title": "Live customer updates",
                  "content": "Keep your customer updated with order status and delivery.",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                },
                {
                  "title": "Payment integration",
                  "content": "Accept all major payments from cards and eWallets.",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                },
                {
                  "title": "Delivery integration",
                  "content": "Offer delivery with the largest logistics partners in SE Asia.",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                },
                {
                  "title": "Google Analytics",
                  "content": "All the website traffic data you will ever need.",
                  "image": {
                    "src": "/images/image-placeholder.png"
                  }
                }
              ].map((item, i)=>(
                <div key={i} className="flex space-x-5 md:space-x-10 shadow p-5 md:p-10 border rounded-2xl">
                  <div>
                    <Image src={item.image.src} height={64} width={64} alt="Image placeholder" />
                  </div>
                  <div className="text-left md:text-center">
                    <h4 className="font-semibold text-[24px]">{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </Section>

      <Divider className="bg-white h-[60px]" />

      <Bottom />

    </LayoutDefault>
    
  )
}