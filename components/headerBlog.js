//
import Link from 'next/link'

// Redux
import { useDispatch, useSelector } from "react-redux"
import { setPopupMenu } from "../store/uiSlice";

// Components
import Logo from "./logo";
import MainMenu from "./mainmenu";
import { IconMenu } from "./templates/icons";

export default function HeaderBlog() {

  const dispatch = useDispatch()
  const { popupMenu } = useSelector(state => state.ui)

  return (
    <header className="p-5 text-center">
      <div className="inline-flex justify-center items-start relative">
        <Logo className="" />
        <span className="absolute text-[14px] text-primary2 font-medium left-[112px]">blog</span>
      </div>
    </header>
  )
}