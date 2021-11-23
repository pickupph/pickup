// Components
import BannerMain from "../components/bannerMain"
import BoxImage from "../components/boxImage"
import Button from "../components/templates/button"
import LayoutDefault from "../components/templates/layoutDefault"


export default function Home() {
  return (
    <LayoutDefault>

      {/** Banner */}
      <BannerMain className="">
        <h1 className="text-heroHeader">Slogan here...</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Button bg="bg-primary2" className="my-5 h-buttonLg text-white"></Button>
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

    </LayoutDefault>
    
  )
}