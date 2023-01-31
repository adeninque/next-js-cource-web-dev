import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
   <Layout>
     <Head>
      <link rel="icon" href="/logo.svg" />
     </Head>
     <Component {...pageProps} />
     {/* <Image src='https://fastly.picsum.photos/id/563/200/300.jpg?hmac=SZO4DbUo3eM7wbKdFWm2jUkpnLD7OkJda_aTTd8FP9k' width={100} height={100} style={{width: 'auto', height: 'auto'}} alt='pic'></Image> */}
   </Layout> 
  )
}
