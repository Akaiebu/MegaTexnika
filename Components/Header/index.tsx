import axios from 'axios';
import Link from 'next/link'
import Image from 'next/image';
import styles from './style.module.css'
import HamburgerMenu from '../Hamburger';
import { Iheadlinks, Imedia } from '@/Interface';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Header = async () => {
  const data = await axios.get('http://localhost:8000/headlinks/')
  const datas = [
    { "id":1 , "to":"https://www.instagram.com/" , "icon": <FaInstagram/> },
    { "id":2 , "to":"https://www.facebook.com/" , "icon": <FaFacebookF/> },
    { "id":3 , "to":"https://twitter.com/?lang=en" , "icon": <FaTwitter/> }
  ]
  return (
    <nav>
        <div className={styles.nav}>
        <div className='container'>
        <div className={styles.flexing}>
        <p>+994(12) 123 45 67  |  Fətəli Xan Xoyski 111A, Bakı Azərbaycan</p>
        <div className={styles.link}>
        {datas.map(({id,to,icon}: Imedia) => {
                return (
                    <Link key={id} href={to}>{icon}</Link>
                )
              })}
        </div>
        </div>
        </div>
        </div>
        <div className='container'>
              <HamburgerMenu/>
        <div className={styles.navigation}>
            <Link href="/">
                <Image src="/logo.png" alt='logo' width={168} height={38}/>
            </Link>
            <div className={styles.navi}>
              {data.data.map(({id,to,title}: Iheadlinks) => {
                return (<Link key={id} href={to}>{title}</Link>)})}
            </div>
            <div className={styles.lang}>Az | En | Ru</div>
        </div>
        </div>
    </nav>
  )
}

export default Header