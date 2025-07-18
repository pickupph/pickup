import Image from "next/image"

export default function StepRL({ image, order, text, first = false, last = false}) {
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

          <div className="real-shadow rounded-3xl">
            <Image src={image?.src || `/images/image-placeholder.png`} height={512} width={512} alt="Image placeholder" className="object-contain" />
          </div>

        </div>
      </div>
      
    </div>
  )
}