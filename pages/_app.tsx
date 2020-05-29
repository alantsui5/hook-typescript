import Stores, {useGlobal} from 'stores/store'
import Head from 'next/head'
import favIcon from 'public/favicon.ico'

import 'normalize.css';

const MyApp = ({ Component, pageProps }) => {
	const global = useGlobal();
  return (
    <div>
      <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href={favIcon} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
          name="description"
          content="Web site created using React Template"
      />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        </Head>
      <Stores.Provider value={global}>
        <Component {...pageProps} />
      </Stores.Provider>
    </div>
  )
}

export default MyApp