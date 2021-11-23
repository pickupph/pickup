// Components
import BannerMain from "../components/bannerMain"
import BoxImage from "../components/boxImage"
import Features from "../components/features"
import Button from "../components/templates/button"
import LayoutDefault from "../components/templates/layoutDefault"


export default function Home() {
  return (
    <LayoutDefault>

      {/** Banner */}
      <BannerMain className="">
        <h1 className="text-fs-heroHeaderSM md:text-fs-heroHeader">Slogan here...</h1>
        <p className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Button bg="bg-primary2" className="my-5 h-buttonLg text-white hover:brightness-90"></Button>
      </BannerMain>

      {/** Box 1 */}
      <BoxImage />

      {/** Box 2 */}
      <BoxImage order="rl" />

      {/** Box 3 */}
      <BoxImage />

      {/** Box 4 */}
      <BoxImage order="rl" />

      {/** Box 5 */}
      <BoxImage />

      {/** Features 3 grid component */}
      <Features />

    </LayoutDefault>
    
  )
}