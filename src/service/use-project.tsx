import useSWR from 'swr'

import fetch from '../library/fetch'

export default function useProjects() {
  return useSWR('/api/data', fetch)
}
