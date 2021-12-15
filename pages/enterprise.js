// Packages
import Image from 'next/image'

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import FormBookADemo from "../components/formBookADemo"

export default function Home() {

  return (
    <LayoutDefault
      meta={{
        title: "Pickup.ph for Enterprise and Retail Groups"
      }}
      classNameMain='bg-gray-100'
    >

      <div className="container mx-auto px-5 py-5 md:py-20 text-center">
        <h1 className="text-[40px] mb-[20px]">What will you use Pickup.ph for?</h1>
        <p className="text-[16px]">This helps us tailor your onboarding.</p>
      </div>

      <div className='container mx-auto grid md:grid-cols-3 gap-[30px] px-5 max-w-[1024px]'>
        {
          [
            {
              "label": "Multiple stores",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "icon": {
                "src": "/images/image-placeholder.png",
                "height": 512,
                "width": 512
              }
            },
            {
              "label": "Multiple brands",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "icon": {
                "src": "/images/image-placeholder.png",
                "height": 512,
                "width": 512
              }
            },
            {
              "label": "Multiple stores & multiple brands",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "icon": {
                "src": "/images/image-placeholder.png",
                "height": 512,
                "width": 512
              }
            }
          ].map((item, i)=>(
            <div key={i} className='transition-all duration-300 ease-in-out border hover:border-primary2 rounded-lg bg-white flex flex-col items-center justify-between p-10 text-center'>
              <div className='mb-1'>
                <Image src={item.icon.src} height={80} width={80} alt={item.label} />
              </div>
              <h3 className='mb-1 font-semibold'>{item.label}</h3>
              <p>{item.content}</p>
            </div>
          ))
        }
      </div>

      <div className='container mx-auto px-5 py-10 max-w-[1024px]'>
        <div className='bg-white p-10 border rounded-md'>
          <h2 className='text-center text-[40px] capitalize mb-5'>Contact us</h2>
          <FormBookADemo />
        </div>
        
      </div>
      

    </LayoutDefault>
    
  )
}