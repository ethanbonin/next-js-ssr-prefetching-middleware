import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SSR Prefetch Bug Example</title>
      </Head>
      <main>
        <Link href={'/ssr-page'}>
          <a>
            <h2>SSR Page &rarr;</h2>
            <p>Should Prefetch data?</p>
          </a>
        </Link>
      </main>
    </div>
  )
}

export default Home
