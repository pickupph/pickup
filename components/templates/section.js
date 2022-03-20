export default function Section({ className, children }) {
  return (
    <section className={`p-5 w-full ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
} 