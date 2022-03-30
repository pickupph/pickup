import { useEffect } from "react"

export default function StepRLVideo({ image, order, text, first = false, last = false}) {

  // On load
  useEffect(()=>{

    // This will trigger our autoplay
    const v = document.querySelector('[data-video="popper"]').play()

    if (v !== undefined) {
      v.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        // console.log('Not autoplaying..')
      });
    }

  }, [])

  return (
    <div className="flex justify-center items-stretch text-center">

      <div className="flex-grow w-[40%] flex items-center">
        <div className="mr-3 md:mr-10 ml-auto">
          <h3 className="text-[20px] md:text-[30px] font-semibold">{text}</h3>
        </div>
      </div>

      <div className="w-[20%] max-w-[200px] flex flex-col">
        <div className={`w-[2px]  h-full mx-auto flex-grow ${first?``:`border-r-2 border-primary2 border-dashed opacity-70`}`}></div>
        <div className="">
          <p className="text-[30px] bg-white h-[60px] md:h-[80px] w-[60px] md:w-[80px] rounded-full shadow flex items-center justify-center mx-auto text-primary2 font-semibold">{order}</p>
        </div>
        <div className={`w-[2px]  h-full mx-auto flex-grow ${last?``:`border-r-2 border-primary2 border-dashed opacity-70`}`}></div>
      </div>
      
      <div className="flex-grow w-[40%] text-center">
        <div className="max-w-[360px] text-center ml-3 md:ml-10 mr-auto my-3 md:my-10 rounded-2xl">
          <div>
            <video data-video="popper" className="w-full" autoPlay muted loop allowFullScreen={false} playsInline>
              <source src="/videos/poppers.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
    </div>
  )
}