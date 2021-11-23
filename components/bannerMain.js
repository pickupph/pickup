export default function BannerMain({ className, children }) {
  return (
    <section className={`p-5 md:h-banner flex flex-col items-center justify-center bg-gray-100 ${className}`}>
      {children}
    </section>
  )
}