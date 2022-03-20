// Components
import AsFeaturedIn from "../components/asFeaturedIn"
import BannerMain from "../components/bannerMain"
import Bottom from "../components/bottom"
import BoxVideo from "../components/boxVideo"
import Community from "../components/community"
import Divider from "../components/divider"
import Features from "../components/features"
import LayoutDefault from "../components/templates/layoutDefault"


export default function Home() {
  return (
    <LayoutDefault>

      {/** Banner */}
      <BannerMain className="md:mb-20" />

      {/** Pickup dashboard */}
      <BoxVideo
        video={{
          id: `video-5`,
          src: `/videos/pickup.mp4`,
          type: `video/mp4`
        }}
        title="Your site, your design"
        content="Create your own branded online store in minutes with professional templates; simply add your logo, images, change colours and start bringing your online store to life."
      />

      {/** Component special discounts */}
      <BoxVideo
        video={{
          id: `video-2`,
          src: `/videos/video-2-square.mp4`,
          type: `video/mp4`
        }}
        title="Promote with ease"
        content="Attract new and convert existing customers to your user-friendly site and enjoy seeing your promotions and marketing ROAS make an impact on your business in the real world."
        order="rl"
      />

      {/** Component dashboard */}
      <BoxVideo
        video={{
          id: `video-3`,
          src: `/videos/video-3-square.mp4`,
          type: `video/mp4`
        }}
        title="Collect payments &amp; manage orders"
        content="All the hard work has been done in advance, so your store can accept all major payment methods instantly and manage incoming orders on the fly through our in-store app."
      />
        

      {/** Track delivery */}
      <BoxVideo
        video={{
          id: `video-4`,
          src: `/videos/track-delivery.mp4`,
          type: `video/mp4`
        }}
        title="Deliver effortlessly
        "
        content="Free up time with your operations staff by using our auto-hailing delivery feature. We've removed the need for manually booking riders so your staff can focus on providing the best service to your customers."
        order="rl"
      />

      {/** Rewards */}
      <BoxVideo
        video={{
          id: `video-6`,
          src: `/videos/video-rewards.mp4`,
          type: `video/mp4`
        }}
        title="Re engage customers"
        content="Keep your brand top of mind with customers through our loyalty platform; create relevant personal promotions, loyalty programs, new customer engagement journeys and much more."
      />

      {/** Features 3 grid component */}
      <Features />

      {/** */}
      <Community />
      
      {/** */}
      <Divider className="container mx-auto" />

      {/** Component */}
      <AsFeaturedIn />

      {/** */}
      <Bottom className="" />

    </LayoutDefault>
    
  )
}