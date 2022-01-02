export default function IsLoading({ className }) {
  return(
    <section className={`fixed top-0 left-0 h-screen w-full flex items-center justify-center`}>
      <p className="border p-5">Loading...</p>
    </section>
  )
}