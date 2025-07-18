// Components
import FormContact from "../components/formContact"
import LayoutDefault from "../components/templates/layoutDefault"
import Bottom from "../components/bottom"

export default function Contact() {

  return (
    <LayoutDefault
      meta={{
        title: "Book a demo"
      }}
    >

      <div className="container mx-auto px-5 py-5 md:py-10 text-center">
        <h1 className="text-[40px] md:text-fs-heroHeader">Contact Us</h1>
        <p className="text-fs-body mx-auto max-w-[780px]">Interested to schedule a demo to discuss your needs and see how we can help your retail business thrive.</p>
      </div>

      <div className="container mb-10 mx-auto px-5 py-5 md:py-10 text-center max-w-[780px]">
        <FormContact />
      </div>

      <Bottom />
      
    </LayoutDefault>
    
  )
}