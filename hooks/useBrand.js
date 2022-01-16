//
import useSWR from "swr"

//
import { API_BASEURL_BRANDS } from "../config/constants"

export default function useBrand(brand_url) {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`${API_BASEURL_BRANDS}/${brand_url}`, fetcher)

  return {
    _brand: data,
    _brandIsLoading: !error && !data,
    _brandIsError: error
  }
}