import Head from 'next/head'
import Heading from '@/components/Heading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon | Ashley Morgan</title>
        <meta name="description" content="Ashley Morgan Portfolio Stand By" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='min-h-screen flex justify-center items-center bg-deep-blue p-4 md:p-8'>
        <Heading />
      </main>
    </>

    
  )
}
