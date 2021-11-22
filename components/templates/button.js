import Link from 'next/link'

export default function Button({ 
  className = '',
  type = 'button ', 
  label = "Button label", 
  link = "/",
  bg = "bg-primary1"
}) {

  const DEFAULT_CLASS = `text-button md:text-buttonLg uppercase px-32px py-2 rounded-2xl font-semibold whitespace-nowrap ${bg}`

  if(type=="link") {
    return <Link href={link}><a className={`${DEFAULT_CLASS} ${className}`}>{label}</a></Link>
  }

  return <button className={`${DEFAULT_CLASS} ${className}`}>{label}</button>

}