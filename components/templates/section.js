export default function Section({ className, classInner, children }) {
  return (
    <section className={`p-5 w-full ${className}`}>
      <div className={`${classInner} container mx-auto`}>
        {children}
      </div>
    </section>
  )
} 