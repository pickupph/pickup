//
import Image from "next/image"

//
import { SITE_IMAGE_DEFAULT_REL } from "../config/constants"

export default function BlogFeaturedMedia({ item, className }) {

  const defaultImage = {
    source_url: SITE_IMAGE_DEFAULT_REL,
    media_details: {
      sizes: {
        medium: {
          width: 406,
          height: 277
        }
      }
    },
    alt_text: "Pickup PH"
  }
  const image = item?._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] : defaultImage

  return (
    <>
      {
        image ?
          <Image 
            src={image.source_url} 
            width={image.media_details.sizes.medium.width}
            height={image.media_details.sizes.medium.height}
            alt={image.alt_text}
            className={`w-full ${className}`}
            layout='responsive'
          /> :
          <p className={className}>No image</p>
      }
    </>
  )
}