import React from 'react'
import axios from 'axios';
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.css'
import { Iadress, Ilinks, Imedia } from '@/Interface';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = async () => {
  const data = await axios.get('http://localhost:8000/links/')
  const datas = await axios.get('http://localhost:8000/adress/')
  const datass = [
    { "id":1 , "to":"https://www.instagram.com/" , "icon": <FaInstagram/> },
    { "id":2 , "to":"https://www.facebook.com/" , "icon": <FaFacebookF/> },
    { "id":3 , "to":"https://twitter.com/?lang=en" , "icon": <FaTwitter/> }
  ]
  return (
    <div className={styles.footer}>
        <div className='container'>
            <div className={styles.cont}>
            <div className={styles.flex}>
            <div>
                <Image src="/logow.png" alt='logo' width={149} height={60}/>
            </div>
            <div className={styles.flexing}>
            {data.data.map(({id,to,title}: Ilinks) => {
                return (
                    <Link key={id} href={to}>{title}</Link>
                )
              })}
            </div>
            <div className={styles.column}>
            {datas.data.map(({id,to,title}: Iadress) => {
                return (
                    <Link key={id} href={to}>{title}</Link>
                )
              })}
            </div>
            <div className={styles.col}>
                <p>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</p>
                <div className={styles.link}>
                {datass.map(({id,to,icon}: Imedia) => {
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