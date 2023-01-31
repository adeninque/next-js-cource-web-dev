import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import s from '../styles/404.module.scss'
import Head from "next/head";

const Error = () => {
  const router = useRouter()
  const [sec, setSec] = useState(3) 

  const startCountdown = async () => {
    if (sec > 0) {
      setTimeout(() => {
        console.log(sec)
        setSec(prev => prev - 1)
      }, 1000)
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    startCountdown()
  }, [sec])

  // useEffect(() => {
  // })

  return(
    <>
      <Head>
        <title>Error</title>
      </Head>
      
      <div className={s.error}>
        <div className="container">
          <div className={s.error__body}>
            <div className={s.error__title}>404</div>
            <div className={s.error__subtitle}>sorry, something went wrong. Your will be redirected to Home page in: </div>
            <div className={s.error__sec}>{sec}s</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error;