import Logo from "./logo";
import MainMenu from "./mainmenu";
import { IconMenu } from "./templates/icons";

export default function Header() {
  return (
    <header className="px-5 border-b h-header flex items-center justify-between">
      <div className="h-full flex items-center">
        <Logo />
        <MainMenu className="hidden md:flex" />
      </div>
      <div className="flex items-center space-x-5">
        <button className="text-button uppercase bg-primary1 px-5 py-2 rounded-md font-semibold">Login</button>
        <IconMenu className="block md:hidden" />
      </div>
    </header>
  )
}