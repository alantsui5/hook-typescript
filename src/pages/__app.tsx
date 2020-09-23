import { AppProps } from 'next/app'
import Stores, {useGlobal} from '../store'

import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  const global = useGlobal();
  return (
    <Stores.Provider value={global}>
      <Component {...pageProps} />
    </Stores.Provider>
   )
}

export default MyApp
