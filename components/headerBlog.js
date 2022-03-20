// Components
import Logo from "./logo"

export default function HeaderBlog() {

  return (
    <header className="p-5 text-center">
      <div className="inline-flex justify-center items-start relative">
        <Logo href={`/blog`} className="" />
        <span className="absolute text-[14px] text-primary2 font-medium left-[112px]">blog</span>
      </div>
    </header>
  )
}