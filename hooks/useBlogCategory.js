//
import useSWR from "swr"

//
import { WP_API_URL } from "../config/constants"

export default function useBlogCategory(id) {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`${WP_API_URL}/wp/v2/categories/${id}`, fetcher)

  return {
    category: data,
    categoryIsLoading: !error && !data,
    categoryIsError: error
  }
}