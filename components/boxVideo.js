import { useEffect } from "react"

export default function BoxVideo({ 
  className, 
  order = "lr" 
}) {

  useEffect(()=>{

    // This will trigger our autoplay
    const v = document.querySelector('[data-video="video-2"]').play()

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
    <section>
      <div className={`py-5 md:py-0 container mx-auto grid md:grid-cols-2 md:gap-10 items-center justify-content md:min-h-boxXL ${ className}`}>
        
        {/** Left */}
        <div className={`p-5 flex items-center justify-center ${order=='rl'?`md:order-2`:``}`}>
          <video data-video="video-2" className="w-full" autoPlay muted loop>
            <source src="/videos/video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/** Right */}
        <div className="p-5 flex justify-center">
          <div className="max-w-narrowSM">
            <h2 className="text-fs-subHeaderSM md:text-fs-subHeader mb-5">
              Lorem Ipsum
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}