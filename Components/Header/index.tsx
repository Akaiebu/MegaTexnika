import Link from 'next/link'
import Image from 'next/image';
import { headlinks, social_media } from '../data';
import styles from './style.module.css'

const Header = () => {
  return (
    <nav>
        <div className={styles.nav}>
        <div className='container'>
        <div className={styles.flexing}>
        <p>+994(12) 123 45 67  |  Fətəli Xan Xoyski 111A, Bakı Azərbaycan</p>
        <div className={styles.link}>
        {social_media.map(({id,to,icon}) => {
                return (
                    <Link key={id} href={to}>{icon}</Link>
                )
              })}
        </div>
        </div>
        </div>
        </div>
        <div className='container'>
        <div className={styles.navigation}>
            <Link href="/">
                <Image src="/logo.png" alt='logo' width={168} height={38}/>
            </Link>
            <div className={styles.navi}>
              {headlinks.map(({id,to,title}) => {
                return (
                    <Link key={id} href={to}>{title}</Link>
                )
              })}
            </div>
            <div className={styles.lang}>Az | En | Ru</div>
        </div>
        </div>
    </nav>
  )
}

export default Header