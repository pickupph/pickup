// Components
import LayoutDefault from "../components/templates/layoutDefault"

export default function HowItWorks() {

  return (
    <LayoutDefault
      meta={{
        title: "How it works"
      }}
    >

      <div className="container mx-auto px-5 py-5 md:py-10 text-center">
        <h1 className="text-[40px] md:text-fs-heroHeader">How it works</h1>
        <p className="text-fs-body mx-auto max-w-[780px]">Coming soon...</p>
      </div>

    </LayoutDefault>
    
  )
}