import Store from '../../store/store'
import { useContext } from 'react'

export default () => {
    const { userAuth } = useContext(Store)
    let isLoggedin = userAuth.isLoggedin
    return { isLoggedin }
}