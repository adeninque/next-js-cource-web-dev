import Head from "next/head";
import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";
import axios, { AxiosResponse } from 'axios';
import { IContact } from '../../interfaces/contact'
import s from '../../styles/Contact.module.scss'
import { GetServerSideProps } from "next";

interface ContactProps {
  contact: IContact
}

export const getServerSideProps: GetServerSideProps = async ( context ) => {
  const { id } = context.params as {id: string};
  
  try {
    const { data, status }: AxiosResponse<IContact> = await axios.get<IContact>(`https://jsonplaceholder.typicode.com/users/${id}`)
    return {
      props: { contact: data }
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(`error message: ${err.message}`)
    } else {
      console.log(`unexpected error: ${err}`)
    }
    return {
      props: { contact: null }
    }
  }
}

const Contact = ({ contact }: ContactProps) => {
  return(
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <div className={s.contact}>
        <div className="container">
          <div className={s.contact__body}>
            <ContactInfo contact={contact}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;