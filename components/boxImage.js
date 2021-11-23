import Image from 'next/image'

export default function BoxImage({ className }) {
  return (
    <section>
      <div className={`container mx-auto grid grid-cols-2 gap-10 items-center justify-content min-h-boxXL ${ className}`}>
        <div className="p-5 flex items-center justify-center">
          <Image src="/images/image-placeholder.png" alt="Placeholder image" height={64} width={64} />
        </div>
        <div className="p-5">
          <div className="max-w-narrowSM">
            <h2 className="text-subHeader mb-5">
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