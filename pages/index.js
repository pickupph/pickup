import Image from "next/image";

import LayoutDefault from "../components/templates/layoutDefault";
import Bottom from "../components/bottom";

import { SITE_NAME } from "../config/constants";

export default function About() {
  return (
    <LayoutDefault
      meta={{
        title: `About ${SITE_NAME} | The ${SITE_NAME} story`,
      }}
    >
      <div className="container mx-auto px-5 py-10 md:py-20">
        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto">
          <h1 className="text-[30px] md:text-[40px]">
            About {SITE_NAME} - Our Founder's Story
          </h1>
        </div>

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto border-l-[6px] border-l-[#39e09b]">
          <p className="text-[22px] md:text-[32px]">
            {SITE_NAME} is a merchant-first solution built by retailers for
            retailers to solve key problems we experienced first hand.
          </p>
        </div>

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto my-[50px]">
          <div className="box-shadow box-shadow--blue">
            <Image
              src="/images/about-us.png"
              width={1400}
              height={787}
              alt="Pickup PH"
              layout="responsive"
              className="rounded-lg block cover"
            />
          </div>
        </div>

        <div className="py-1 max-w-[780px] px-[15px] md:px-[30px] mx-auto my-[50px]">
          <p className="text-[20px] md:text-[24px] text-[#263238]">
            We&apos;re a tool for connecting customers to your online store,
            managing menus, upcoming orders, payments, deliveries and analytics
            — without marketplace commissions
          </p>
        </div>

        <div className="py-1 max-w-[780px] md:px-[30px] mx-auto my-[50px] leading-relaxed">
          <h2 className="text-[32px] md:text-[48px] mb-10">Our Story</h2>
          <p className="text-[16px] mb-10">
            In 2020, Ingga Chua and Thomas Woudwyk, found a common pain point
            while running their pizza store during a pandemic; they were too
            busy managing the operations of their business, when all of a sudden
            customers shifted overnight from walk-in ordering to online
            ordering. Instantly, customers were placing orders via Phone,
            Google, Messenger, Instagram, Viber, Whatsapp and the team had to
            manually take all of these orders, hail delivery riders individually
            and it all became impossible to manage.
          </p>
          <p className="text-[16px] mb-10">
            That was when Pickup was born; Thomas designed Pickup to take what
            is otherwise complicated and inaccessible like online ordering,
            payments, order management and delivery, but make it simple and
            accessible to everyone. We believe that in this post-pandemic era,
            being online and able to accept commission-free direct orders from
            customers will be a basic necessity, just like having a business
            Facebook page is today.
          </p>
        </div>

        <div className="py-1 max-w-[780px] md:px-[30px] mx-auto my-[50px] leading-relaxed">
          <h2 className="text-[32px] md:text-[48px] mb-10 text-center font-semibold capitalize">
            Our beliefs
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-center">
            {[
              {
                label: "100% Merchant Focused",
                content:
                  "You could say we are merchant-obsessed; we want to be the heroes of the industry, by focusing on the folks who need us the most.",
              },
              {
                label: "Relentless Problem Solvers",
                content:
                  "We are a team of big dreamers and hard-working doers; questioning status quo&apos;s, design thinking and building epic solutions is kinda our thing!",
              },
              {
                label: "Meaningful Impact",
                content:
                  "Talk is cheap, but the proof is in the numbers; we measure and showcase the positive impact we are making in the industry.",
              },
              {
                label: "We love disruption",
                content:
                  "Our team is at home being comfortable with discomfort; disruption happens when you are running towards the fire with a very big firehose.",
              },
            ].map((item, i) => (
              <div key={i} className="shadow border p-8 rounded-xl">
                <h3 className="text-[22px] font-semibold mb-4">{item.label}</h3>
                <p
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="py-1 max-w-[780px] md:px-[30px] mx-auto my-[50px] leading-relaxed text-center">
          <h2 className="text-[32px] md:text-[40px] text-center font-semibold capitalize mb-4">
            Come and join our fast-growing team
          </h2>
          <p className="text-[22px] mb-4">
            Go to our Careers page or send us an email to{" "}
            <a href="mailto:recruitment@pickup.ph " className="text-primary2">
              recruitment@pickup.ph{" "}
            </a>
          </p>
          <p>
            <a
              className="text-fs-button md:text-fs-buttonLg px-32px py-3 rounded-2xl font-semibold whitespace-nowrap transition duration-200 ease-in-out items-center inline-flex justify-center bg-primary2 my-5 h-buttonLg text-white hover:brightness-90"
              href="mailto:recruitment@pickup.ph "
            >
              Find a job at Pickup.ph
            </a>
          </p>
        </div>
      </div>

      <Bottom />
    </LayoutDefault>
  );
}
