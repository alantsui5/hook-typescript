import GlobalHook from '../../app/store'
import { useContainer } from 'unstated-next'

export default () => {
    const { userAuth } = useContainer(GlobalHook)
    let isLoggedin = userAuth.isLoggedin
    return { isLoggedin }
}