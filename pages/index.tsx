import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Heading from '../components/Heading'
import s from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={s.wrapper}>
        <Heading text='Hello world'/>
      </div>
    </>
  )
}
