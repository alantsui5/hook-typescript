import { createContext } from 'react'
import UserAuth from './userAuth.store'


export function useGlobal() {
    let userAuth = UserAuth()
    return { userAuth }
}

let a:any
const Store = createContext(a)


export default Store