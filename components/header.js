// Redux
import { useDispatch, useSelector } from "react-redux"
import { setPopupMenu } from "../store/uiSlice";

// Components
import Logo from "./logo";
import MainMenu from "./mainmenu";
import { IconMenu } from "./templates/icons";

export default function Header() {

  const dispatch = useDispatch()
  const { popupMenu } = useSelector(state => state.ui)

  return (
    <header className="px-5 border-b h-header flex items-center justify-between">
      <div className="h-full flex items-center">
        <Logo />
        <MainMenu className="hidden header:flex" />
      </div>
      <div className="flex items-center space-x-5">
        <button className="text-button uppercase px-5 py-2 font-semibold hidden sm:block">Login</button>
        <button className="text-button uppercase bg-primary1 px-5 py-2 rounded-md font-semibold whitespace-nowrap">Sign up free</button>
        <button onClick={()=>dispatch(setPopupMenu(popupMenu ? false : true))}>
          <IconMenu className="block header:hidden" />
        </button>
      </div>
    </header>
  )
}