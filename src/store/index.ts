import { createContext } from 'react'
import UserAuth from './userAuth'

export function useGlobal() {
  const userAuth = UserAuth()
  return { userAuth }
}

let placeholder: any

const Store = createContext(placeholder)

export default Store
