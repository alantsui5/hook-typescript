import { createContext } from 'react'
import UserAuth from './userAuth.store'


export function useGlobal() {
    let userAuth = UserAuth()
    return { userAuth }
}

let placeholder:any

const Store = createContext(placeholder)


export default Store