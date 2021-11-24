// Components
import BannerMain from "../components/bannerMain"
import BoxImage from "../components/boxImage"
import BoxVideo from "../components/boxVideo"
import Features from "../components/features"
import LayoutDefault from "../components/templates/layoutDefault"


export default function Home() {
  return (
    <LayoutDefault>

      {/** Banner */}
      <BannerMain className="md:mb-20" />

      {/** Component special discounts */}
      <BoxVideo />

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