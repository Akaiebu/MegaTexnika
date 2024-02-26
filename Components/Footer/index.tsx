import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.css'
import { adress, links, social_media } from '../data';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className='container'>
            <div className={styles.cont}>
            <div className={styles.flex}>
            <div>
                <Image src="/logow.png" alt='logo' width={149} height={60}/>
            </div>
            <div className={styles.flexing}>
            {links.map(({id,to,title}) => {
                return (
                    <Link key={id} href={to}>{title}</Link>
                )
              })}
            </div>
            <div className={styles.column}>
            {adress.map(({id,to,title}) => {
                return (
                    <Link key={id} href={to}>{title}</Link>
                )
              })}
            </div>
            <div className={styles.col}>
                <p>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</p>
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
            <div className={styles.bottom}>
                <div>© 2022 Megatexnika / Müəllif hüquqları</div>
                <div>Design by <span className={styles.h}>JEDAİ</span></div>
            </div>
        </div>
    </div>
  )
}

export default Footer