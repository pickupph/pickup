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
      <BannerMain />

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