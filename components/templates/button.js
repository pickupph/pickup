import Link from 'next/link'

export default function Button({ 
  className = '',
  type = 'button ', 
  label = "Button label", 
  link = "/",
  bg = "bg-primary1",
  children
}) {

  const DEFAULT_CLASS = `text-fs-button md:text-fs-buttonLg uppercase px-32px py-3 rounded-2xl font-semibold whitespace-nowrap transition duration-200 ease-in-out inline-block items-center inline-flex justify-center ${bg}`

  if(type=="link") {
    return <Link href={link}><a className={`${DEFAULT_CLASS} ${className}`}>{children || label}</a></Link>
  }

  return <button className={`${DEFAULT_CLASS} ${className}`}>{children || label}</button>

}