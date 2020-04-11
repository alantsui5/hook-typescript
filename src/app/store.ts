import { createContainer } from 'unstated-next'
import UserAuth from './userAuth.store'


function globalHook(): any {
    let userAuth = UserAuth()
    return { userAuth }
}

let GlobalHook = createContainer(globalHook)


export default GlobalHook