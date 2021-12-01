import { setTerm } from "../store/searchSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

// Components
import { IconSearch } from "./templates/icons"


export default function FormSearch(){

  const dispatch = useDispatch()
  const { term } = useSelector(state => state.search)

  return (
    <form>
      <div className="relative">
        <IconSearch color="#cccccc" className="absolute top-[18px] left-[18px]" />
        <input 
          name="search" 
          placeholder="Search for articles" 
          className="rounded-md h-[58px] w-full bg-white focus:bg-white bg-opacity-20 hover:bg-opacity-25 border-0 focus:border-0 outline-none py-[16px] pl-[59px] pr-[32px] transition-all duration-300 ease-in-out text-white focus:text-body placeholder-white focus:placeholder-body" 
          onChange={e=>dispatch(setTerm(e.target.value))}
          value={term}
        />
      </div>
    </form>
  )
}