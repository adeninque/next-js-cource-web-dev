import Head from "next/head";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Heading from "../../components/Heading";
import Link from "next/link";
import { IContact } from "../../interfaces/contact";
import s from '../../styles/Contacts.module.scss'


export const getStaticProps = async () => {
  try {
    const { data, status }: AxiosResponse<IContact[]> = await axios.get<IContact[]>('https://jsonplaceholder.typicode.com/users')
    return {
      props: { contacts: data }
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(`error message: ${err.message}`)
    } else {
      console.log(`unexpected error: ${err}`)
    }
    return {
      notFound: true
    }
  }
}

interface ContactsProps {
  contacts: IContact[] | null
}

const Contacts = ({ contacts } : ContactsProps) => {
  return(
    <>
      <Head>
        <title>Contacts</title>
      </Head>

      <div className={s.contacts}>
        <div className="container">
          <div className={s.contacts__body}>
            <h1 className={s.contacts__title}>Contact list</h1>
            {contacts && contacts.map(({ id, email, name }) => (
              <div className={[s.contacts__contact, s.contact].join(' ')} key={id}>
                <Link 
                className={s.contact__inf}
                href={`contacts/${id}`}
                >{name} ({email})</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts;