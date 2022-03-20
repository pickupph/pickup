//
import useSWR from "swr"

//
import { API_BASEURL_STORES } from "../config/constants"

export default function useStore(store_id) {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`${API_BASEURL_STORES}/${store_id}`, fetcher)

  return {
    _store: data,
    _storeIsLoading: !error && !data,
    _storeIsError: error
  }
}