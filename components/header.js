// Redux
import { useDispatch, useSelector } from "react-redux"
import { setPopupMenu } from "../store/uiSlice";

// Components
import Logo from "./logo";
import MainMenu from "./mainmenu";
import Button from './templates/button'
import { IconMenu } from "./templates/icons";

export default function Header() {

  const dispatch = useDispatch()
  const { popupMenu } = useSelector(state => state.ui)

  return (
    <header className="px-5 border-b h-header flex items-center justify-between sticky top-0 bg-white z-30">
      <div className="h-full flex items-center">
        <Logo className="mr-2" />
        <MainMenu className="hidden header:flex" />
      </div>
      <div className="flex items-center space-x-5">
        <a href="https://app.pickup.ph" target="_blank" rel="noopener noreferrer" className="text-fs-button uppercase px-5 py-2 font-semibold hidden sm:block">Login</a>
        <Button 
          type="link" 
          link="/signup"
          className="md:text-[14px] uppercase bg-primary1 py-[8px] px-[20px] rounded-md font-semibold whitespace-nowrap transition duration-100 ease-in-out hover:brightness-90"
        >
          Sign up free
        </Button>
        <button onClick={()=>dispatch(setPopupMenu(popupMenu ? false : true))}>
          <IconMenu className="block header:hidden" />
        </button>
      </div>
    </header>
  )
}