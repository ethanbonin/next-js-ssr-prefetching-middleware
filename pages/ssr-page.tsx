import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'

interface Props {
  data: string;
}

const SSRPage: NextPage<Props> = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <Head>
        <title>SSR Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          The SSR Data { data }
        </p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://echo.jsontest.com/insert-key-here/insert-value-here/key/value');
  const data = await response.json();
  return {
    props: { data: data.key }
  }
}

export default SSRPage;
