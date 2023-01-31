import Heading from "./Heading";
import s from '../styles/Header.module.scss'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Posts', path: '/posts'},
  {id: 3, title: 'Contacts', path: '/contacts'},
]

const Header = () => {
  const { pathname } = useRouter()

  return(
    <>
      <header className={s.header}>
        <div className="container">
          <div className={[s.header__body].join(' ')}>
            <Image src="/logo.svg" width={100} height={100} style={{width:'auto', height: 'auto'}}alt="logo" className={s.header__logo} />
            <nav className={[s.header__nav, s.nav].join(' ')}>
              {navigation.map(({id, title, path}) => (
                <Link href={path} className={[s.nav__link, pathname == path ? s.nav__link_active : null].join(' ')} key={id}>{title}</Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;