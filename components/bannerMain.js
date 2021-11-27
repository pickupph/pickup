// Packages
import { useEffect } from "react"

// Components
import Button from "../components/templates/button"


export default function BannerMain({ className }) {

  // On load
  useEffect(()=>{

    // This will trigger our autoplay
    const v = document.querySelector('[data-video="video-1"]').play()

    if (v !== undefined) {
      v.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        console.log('Not autoplaying..')
      });
    }

  }, [])

  return (
    <section className={`p-5 md:min-h-banner flex flex-col items-center justify-center ${className}`}>
      
      <div className="md:my-20 text-center">
        <h1 className="text-fs-heroHeaderSM md:text-fs-heroHeader">Slogan here...</h1>
        <p className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Button type="link" link="/book-a-demo" bg="bg-primary2" className="my-5 h-buttonLg text-white hover:brightness-90">Book a demo</Button>
      </div>

      <div className="my-5 md:my-0 ">
        <video data-video="video-1" className="w-full" autoPlay muted loop allowFullScreen={false} playsInline>
          <source src="/videos/video-1-square.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </section>
  )
}