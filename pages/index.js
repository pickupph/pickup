// Components
import AsFeaturedIn from "../components/asFeaturedIn"
import BannerMain from "../components/bannerMain"
import BoxVideo from "../components/boxVideo"
import Divider from "../components/divider"
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
          src: `/videos/video-3-square.mp4`,
          type: `video/mp4`
        }}
        title="Lorem Ipsum"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        order="rl"
      />
        

      {/** Track delivery */}
      <BoxVideo
        video={{
          id: `video-4`,
          src: `/videos/track-delivery.mp4`,
          type: `video/mp4`
        }}
        title="Track Delivery"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      {/** Pickup dashboard */}
      <BoxVideo
        video={{
          id: `video-5`,
          src: `/videos/pickup.mp4`,
          type: `video/mp4`
        }}
        title="Lorem Ipsum"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        order="rl"
      />

      {/** Features 3 grid component */}
      <Features />
      
      {/** */}
      <Divider className="container mx-auto" />

      {/** Component */}
      <AsFeaturedIn />

    </LayoutDefault>
    
  )
}