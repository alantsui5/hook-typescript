import Link from 'next/link'
import Layout from '../components/Layout'
import useSWR from 'swr'
async function fetcher(input: RequestInfo, init?: RequestInit){
  const res = await fetch(input, init)
  console.log("dsfs")
  return res.json()
}
const AboutPage: React.FunctionComponent = () => {
	const { data:users } = useSWR('https://reqres.in/api/users?page=2', fetcher)
	return (
	  <Layout title="About | Next.js + TypeScript Example">
	    <h1>About</h1>
	    <p>This is the about page</p>
	    <p>
	    {JSON.stringify(users)}
	      <Link href="/">
	        <a>Go home</a>
	      </Link>
	    </p>
	  </Layout>
	)
}

export default AboutPage
