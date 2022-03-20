import Link from "next/link"
import Section from "./templates/section"
import StepLR from "./stepLR"
import StepRL from "./stepRL"

export default function HowToGetStarted() {
  return (
    <>
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
            <a class="text-fs-button md:text-fs-buttonLg uppercase px-32px py-3 rounded-2xl font-semibold whitespace-nowrap transition duration-200 ease-in-out items-center inline-flex justify-center bg-primary2 my-5 h-buttonLg text-white hover:brightness-90" href="/signup">Get Started for Free</a>
          </Link>
        </div>
      </Section>
    </>
  )
}