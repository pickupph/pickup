// Packages
import { useEffect } from "react"
import Image from "next/image"

// Components
import Button from "../components/templates/button"

//
import { isInViewport } from "../lib/helper"


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
        // console.log('Not autoplaying..')
      });
    }

    const input = document.querySelector("[name='brandname']")
    const placeholder = "YourBrandName".split("")
    var observer = new IntersectionObserver(function(entries) {

      if(entries[0].isIntersecting === true) {

        console.log('Element is fully visible in screen')

        placeholder.forEach((l, i)=>{
    
          setTimeout(()=>{
    
            input.setAttribute("placeholder", input.getAttribute("placeholder") + l)
    
          }, i * 100 )
    
        })
    
        input.focus()

      } else {

        input.setAttribute("placeholder", "")

      }

    }, { threshold: [0] })
    
    observer.observe(input)

    

  }, [])

  return (
    <section className={`p-5 md:min-h-banner flex flex-col items-center justify-center max-w-[1184px] mx-auto px-5 ${className}`}>
      
      <div className="md:my-20 text-center">
        <h1 className="text-fs-heroHeaderSM md:text-fs-heroHeader">We make online ordering uncomplicated</h1>
        <p className="my-5 text-[20px]">ZERO commission, simple but powerful online ordering and delivery system built for your retail business.</p>
        <Button type="link" link="/signup" bg="bg-primary2" className="my-5 h-buttonLg text-white hover:brightness-90">Get Started for Free</Button>
      </div>

      <div className="my-5 md:my-0 ">
        <video data-video="video-1" className="w-full" autoPlay muted loop allowFullScreen={false} playsInline>
          <source src="/videos/video-1-square.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="h-[90px] md:h-[180px] max-w-[1px] overflow-hidden border-r border-dashed bg-[#7551e9] font-[48px] mt-[-25px] relative z-10">

      </div>

      <div className="max-w-[576px] w-full h-[64px] md:h-[80px]">
        <div className="border border-[#7551e9] rounded-full h-full flex items-center justify-between">
          
          <div className="mt-2 min-w-[70px] pl-[15px] md:pl-[30px]">
            <Image src="/images/logo-square.png" height="32" width="32" alt="Logo Pickup" />
          </div>
          <form className="flex-grow w-full">
            <div>
              <input type="text" name="brandname" placeholder="" className="text-[20px] md:text-[32px] p-0 m-0 leading-0 text-right w-full border-none focus:outline-none outline-none active:outline-none ring-0 focus:ring-0 text-gray-500 animate-pulse" />
            </div>  
          </form>
          <div className="text-[20px] md:text-[32px] pr-[15px] md:pr-[30px]">.pickup.ph</div>
          
        </div>
      </div>

    </section>
  )
}