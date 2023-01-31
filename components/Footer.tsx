import Heading from "./Heading";
import s from '../styles/Footer.module.scss'

const Footer = () => {
  return(
    <>
      <footer className={s.footer}>
        <Heading text="Created by Justo" tag="h2"/>
      </footer>
    </>
  )
}

export default Footer;