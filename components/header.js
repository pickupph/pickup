import Logo from "./logo";
import MainMenu from "./mainmenu";

export default function Header() {
  return (
    <header className="px-5 border-b h-header flex items-center justify-between">
      <div className="h-full flex items-center">
        <Logo />
        <MainMenu />
      </div>
    </header>
  )
}