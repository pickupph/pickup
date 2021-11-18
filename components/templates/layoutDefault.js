export default function LayoutDefault({ className, children }) {
  return (
    <section className={`${className}`}>
      {children}
    </section>
  )
}