export default function Toolbar({ className, children }) {
  return (
    <section className="bg-primary2">
      <div className={`container mx-auto p-5 text-white text-center text-fs-bodyXS md:text-fs-body ${className}`}>{children}</div>
    </section>
  )
}