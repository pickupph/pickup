// Components
import LayoutDefault from "../components/templates/layoutDefault"

//
import { SITE_NAME } from "../config/constants"

export default function About() {

  return (
    <LayoutDefault
      meta={{
        title: "About"
      }}
    >

      <div className="container mx-auto px-5 py-10 md:py-20">
        <div className="py-1 max-w-[780px] px-[30px] mx-auto">
          <h1 className="text-[30px] md:text-[40px]">About {SITE_NAME} - Our Founder's Story</h1>
        </div>
        <div className="py-1 max-w-[780px] px-[30px] mx-auto border-l-[6px] border-l-[#39e09b]">
          <p className="text-[22px] md:text-[32px]">{SITE_NAME} makes your online content more discoverable, easier to manage and more likely to convert.</p>
        </div>
        
      </div>

    </LayoutDefault>
    
  )
}