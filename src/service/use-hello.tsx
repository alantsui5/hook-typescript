import useSWR from 'swr'

import fetch from '../library/fetch'

export default function useHello() {
  return useSWR('http://localhost:8080/', fetch)
}
