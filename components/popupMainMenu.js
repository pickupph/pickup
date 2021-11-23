//
import { useDispatch, useSelector } from "react-redux"
import { setPopupMenu } from "../store/uiSlice"

//
import Logo from "./logo"
import MainMenu from "./mainmenu"
import { IconClose } from "./templates/icons"

//

export default function PopupMainmenu({ className }) {

  const dispatch = useDispatch()
  const { popupMenu } = useSelector(state => state.ui)

  return (
    <section className={`w-screen h-screen fixed top-0 bg-white flex flex-col space-y-5 transition-all duration-300 ease-in-out z-40 ${popupMenu ? `left-0` : `left-full`} ${className}`}>
      <div className="flex items-center justify-between min-h-header border-b px-5">
        <Logo />
        {console.log(popupMenu)}
        <button onClick={()=>dispatch(setPopupMenu(false))}>
          <IconClose />
        </button>
      </div>
      <MainMenu className="flex-col space-x-0 space-y-5 px-5 h-auto" />
    </section>
  )
}