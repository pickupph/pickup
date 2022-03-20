import Image from "next/image"
import Section from "./templates/section"

export default function WhatsIncluded() {
  return (
    <Section className={`bg-white`}>
        
      <div className="py-[60px] text-center">
        <h2 className="text-[34px] md:text-[44px] font-semibold">What is included</h2>
        <p>A complete solution that was built with the retail user experience in-mind</p>
      </div>

      <div className="max-w-[890px] mx-auto">
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
  )
}