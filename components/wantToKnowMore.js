import Link from "next/link"
import Section from "./templates/section"
export default function WantToKnowMore() {
  return (
    <Section className={`bg-white`}>
      <div className="py-10 text-center max-w-[752px] mx-auto">
        <h2 className="text-[34px] md:text-[44px] font-semibold">Want to know more?</h2>
        <p>Embarking on your own online ordering site can be a daunting process for most brands, but it doesn't need to be. We are here to guide you along the way, provide marketing best practices and set you up for success. To find our more about how we can help you, get in contact today.</p>
      </div>
      <div className="text-center">
        <Link href="/book-a-demo">
          <a className="text-fs-button md:text-fs-buttonLg uppercase px-32px py-3 rounded-2xl font-semibold whitespace-nowrap transition duration-200 ease-in-out items-center inline-flex justify-center bg-primary2 my-5 h-buttonLg text-white hover:brightness-90 mx-auto">Get in touch</a>
        </Link>
      </div>
    </Section>
  )
}