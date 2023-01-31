import { IContact } from "../interfaces/contact";
import Heading from "./Heading";
import s from '../styles/ContactInfo.module.scss'

interface ContactInfoProps {
  contact?: IContact
}

const ContactInfo = ({ contact }: ContactInfoProps) => {

  const { email, name, address} = contact || {};
  const { zipcode, suite, city, street } = address || {};

  if (!contact) {
    return <Heading tag='h2' text="No such user" />
  }

  return(
    <>
      <div className={s.contact}>
        <div className={s.contact__name}>{name}</div>
        <div className={s.contact__inf}><span>Email: </span>{email}</div>
        <div className={s.contact__inf}><span>Address: </span>{`${city}, ${street}, ${suite}, ${zipcode}`}</div>
      </div>
    </>
  )
}

export default ContactInfo;