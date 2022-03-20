//
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import Section from "../components/templates/section"
import Button from "../components/templates/button"
import Bottom from "../components/bottom"
import Divider from "../components/divider"
import WantToKnowMore from "../components/wantToKnowMore"
import HowToGetStarted from "../components/howToGetStarted"
import WhatsIncluded from "../components/whatsIncluded"

export default function HowItWorks() {

  return (
    <LayoutDefault
      meta={{
        title: "How it works"
      }}
    >

      {/** */}
      <Section>
        <div className="max-w-[1000px] mx-auto py-10">
          <div className="grid md:grid-cols-2 items-center gap-10 md:gap-20">
            <div className="text-center md:text-left">
              <h1 className="text-[38px] md:text-[40px] lg:text-[52px] font-semibold leading-tight mb-8">The most powerful commission-free mobile ordering</h1>
              <p className="text-[20px] lg:text-[22px] mb-8">Create an amazing branded customer experience, increase your revenue and margins while owning the customer data</p>
              <div>
                <Button type="link" link="/signup" bg="bg-primary2" className="my-5 h-buttonLg text-white hover:brightness-90">Get Started for Free</Button>
              </div>
            </div>
            <div className="text-center">
              <Image src="/images/placeholders/how-it-works.jpeg" alt="Pickup how it works" width={500} height={686} className="rounded-[30px]" />
            </div>
          </div>
        </div>
      </Section>

      {/**  */}
      <Section className={`md:py-[60px]`}>
        <div className="max-w-[852px] mx-auto text-center">
          <h2 className="text-[34px] md:text-[44px] font-semibold mb-8">Breadth of solutions</h2>
          <p className="text-[18px] lg:text-[20px]">Pickup is a cloud-based application that is built by retailers specifically for retailers. It is lightning-fast and intuitive app that your customers and employees will love to use.</p>
        </div>
      </Section>

      {/**  */}
      <Section className={``}>
        <div className="max-w-[1000px] mx-auto py-10 text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">

            {/** One */}
            <div className="hidden lg:block">
              <div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">QR Table Ordering</h3>
                  <p className="text-[18px] text-[#888888]">Increase customer spend 20-40% by using Pickup, while creating a seamless ordering experience. Deliver to table or pickup at collection point.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Pickup in-Store</h3>
                  <p className="text-[18px] text-[#888888]">Allow your customers to skip the queue; order online and send an automated notification for them to collect for pickup once the order is ready.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Customer Delivery</h3>
                  <p className="text-[18px] text-[#888888]">Customers can order from the comfort of their own home, have it delivered directly to their doorstep, with real-time updates along with way.</p>
                </div>
              </div>

              <div className="lg:hidden">
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Cashier Ordering</h3>
                  <p className="text-[18px] text-[#888888]">The cashier can place orders and send a payment link to customers, allowing the cashier to move on to the next customer faster.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Cloud Kitchen Ordering</h3>
                  <p className="text-[18px] text-[#888888]">Allow customers to order items with different brands from a single cloud kitchen, with a single payment and all items delivered in a single delivery.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Food Hall Ordering</h3>
                  <p className="text-[18px] text-[#888888]">Provide an exceptional experience with patrons by allowing them to browse all vendors, place orders and get notified when the food is ready - no buzzers needed.</p>
                </div>
              </div>
            </div>

            {/** Two */}
            <div className="flex items-start lg:items-center justify-center">
              <div className="top-[120px]">
         
                <video className="w-full" autoPlay muted loop allowFullScreen={false} playsInline>
                  <source src="/videos/breadth-of-solutions.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/** Three */}
            <div>
              <div className="lg:hidden">
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">QR Table Ordering</h3>
                  <p className="text-[18px] text-[#888888]">Increase customer spend 20-40% by using Pickup, while creating a seamless ordering experience. Deliver to table or pickup at collection point.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Pickup in-Store</h3>
                  <p className="text-[18px] text-[#888888]">Allow your customers to skip the queue; order online and send an automated notification for them to collect for pickup once the order is ready.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Customer Delivery</h3>
                  <p className="text-[18px] text-[#888888]">Customers can order from the comfort of their own home, have it delivered directly to their doorstep, with real-time updates along with way.</p>
                </div>
              </div>

              <div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Cashier Ordering</h3>
                  <p className="text-[18px] text-[#888888]">The cashier can place orders and send a payment link to customers, allowing the cashier to move on to the next customer faster.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Cloud Kitchen Ordering</h3>
                  <p className="text-[18px] text-[#888888]">Allow customers to order items with different brands from a single cloud kitchen, with a single payment and all items delivered in a single delivery.</p>
                </div>
                <div className="mb-10 text-left">
                  <h3 className="text-[26px] mb-3 font-bold">Food Hall Ordering</h3>
                  <p className="text-[18px] text-[#888888]">Provide an exceptional experience with patrons by allowing them to browse all vendors, place orders and get notified when the food is ready - no buzzers needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button type="link" link="/signup" bg="bg-primary2" className="my-5 h-buttonLg text-white hover:brightness-90">Get Started for Free</Button>
        </div>

        <div className="h-[30px]"></div>

      </Section>

      {/**  */}
      <Section>
        <div className="max-w-[1000px] mx-auto pt-5 md:pt-10 text-center">
          <h2 className="text-[34px] md:text-[44px] font-semibold mb-8 max-w-[852px] mx-auto">Leading brands trust Pickup</h2>
          <p className="text-[18px] lg:text-[20px] max-w-[852px] mx-auto">Industry leading restaurateurs, entrepreneurs, and brands use Pickup in their marketing strategy and you should too.</p>
          <div className="mt-10">
            <Image src="/images/placeholders/logos.jpg" width={4938} height={1477} alt="Logo placeholder" />
          </div>
        </div>
      </Section>

      {/** */}
      <Section>
        <div className="max-w-[1000px] mx-auto pt-5 md:pt-10 text-center">
          <h2 className="text-[34px] md:text-[44px] font-semibold mb-8 max-w-[852px] mx-auto">Seamlessly integrated payments and delivery</h2>
          <p className="text-[18px] lg:text-[20px] max-w-[852px] mx-auto">We have already integrated best-in-breed partners so that you can enjoy a turnkey payment and delivery solution.</p>
          <div className="py-10">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                768: {
                  width: 768,
                  slidesPerView: 4,
                  spaceBetween: 50
                }
              }}
            >
              {
                [
                  {
                    "label": "Visa"
                  },
                  {
                    "label": "Mastercard"
                  },
                  {
                    "label": "Gcash"
                  },
                  {
                    "label": "Grab"
                  },
                  {
                    "label": "Lalamove"
                  },
                  {
                    "label": "PayMaya"
                  },
                  {
                    "label": "GrabPay"
                  }
                ].map((item, i)=>(
                  <SwiperSlide key={i}>
                    <div className="p-[20px] text-[20px] font-semibold border rounded-[15px]">{item.label}</div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <div className="text-center mt-10">
              <Button type="link" link="/signup" bg="bg-primary2" className="my-5 h-buttonLg text-white hover:brightness-90">Get Started for Free</Button>
            </div>

          </div>
        </div>
      </Section>

      <Divider className="md:h-[60px]" />

      <HowToGetStarted />

      <Divider className="md:h-[60px]" />

      <WhatsIncluded />

      <Divider className="md:h-[60px]" />

      <WantToKnowMore />

      <Divider className="md:h-[60px]" />

      <Bottom />

    </LayoutDefault>
    
  )
}