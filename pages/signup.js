// Components
import FormSignup from "../components/formSignup"
import LayoutFull2cols from "../components/templates/layoutFull2cols"

export default function Home() {

  return (
    <LayoutFull2cols
      meta={{
        title: "Signup now"
      }}
    >

      <div className="container mx-auto px-5 py-5 md:py-10 text-center">
        <h1 className="text-[32px]">Create an account</h1>
        <p className="text-[16px]">Free forever. No payment needed.</p>
      </div>

      <div className="container mb-10 mx-auto px-5 py-5 md:py-10 text-center max-w-[480px]">
        <FormSignup />
      </div>
      
    </LayoutFull2cols>
    
  )
}