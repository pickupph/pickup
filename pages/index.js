// Components
import BannerMain from "../components/bannerMain"
import Button from "../components/templates/button"
import LayoutDefault from "../components/templates/layoutDefault"

// Fake data


export default function Home() {
  return (
    <LayoutDefault>
      <BannerMain className="">
        <h1 className="text-heroHeader">Slogan here...</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Button bg="bg-primary2" className="my-5 h-buttonLg text-white"></Button>
      </BannerMain>
    </LayoutDefault>
    
  )
}