import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Brands() {
  const router = useRouter()
  useEffect(()=>{router.push(`/brands/crosta`)},[])
  return <></>
}