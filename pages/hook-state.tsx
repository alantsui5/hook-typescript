import Store from 'stores/store'
import { useContext } from 'react'
import GradientButton from 'components/gradient'
import Layout from 'components/Layout'

export default function HooksPage() {
    const { userAuth } = useContext(Store)
    let isLoggedin = userAuth.isLoggedin
    return (
        <Layout title="Global State with hooks">
        	<GradientButton />
            <h1>{!isLoggedin && "I am Logged Out"}</h1>
        </Layout>
    )
}