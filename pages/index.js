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
      <BoxVideo
        video={{
          id: `video-2`,
          src: `/videos/video-2-square.mp4`,
          type: `video/mp4`
        }}
        title="Lorem Ipsum"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      {/** Component dashboard */}
      <BoxVideo
        video={{
          id: `video-3`,
          src: `/videos/video-3.mp4`,
          type: `video/mp4`
        }}
        title="Lorem Ipsum"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        order="rl"
      />
        

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