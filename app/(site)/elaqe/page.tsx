import React from 'react'
import axios from 'axios';
import Link from 'next/link'
import { Imedia } from '@/Interface';
import styles from './style.module.css'

const page = async () => {
  const { data } = await axios.get('http://localhost:8000/social_media/')
  return (
    <div>
        <div className="container">
            <div className={styles.flex}>
            <div className={styles.bize_yazin}>
                <h4>Bizə yazın!</h4>
                <div className={styles.inputs}>
                <form action="https://getform.io/f/qaQY3qan" method='POST'>
                <input type="text" name="ad" id="ad"  placeholder='Ad, Soyad*'/>
                <input type="email" name="mail" id="mail"  placeholder='E-mail*'/>
                <input type="text" name="Şirkətin adı" id="Şirkətin adı" placeholder='Şirkətin adı'/>
                <input type="tel" name="telefon" id="telefon"  placeholder='Telefon*'/>
                </form>
                </div>
                <div className={styles.area}>
                <form action="https://getform.io/f/qaQY3qan" method='POST'>
                <textarea name="Mesaj" id={styles.mesaj} placeholder='Mesaj*'/>
                <input type="submit" id={styles.gonder} value="Göndər" />
                </form>
                </div>
            </div>
            <div className={styles.elaqe}>
                <h4>Əlaqə</h4>
                <div className={styles.linkss}>
                <Link href="https://maps.app.goo.gl/Qq9J46PcLzBzpVfM8">Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Link>
                </div>
                <div className={styles.linkss}>
                    <Link href="/">+994(51) 123 45 67</Link>
                    <Link href="/">+994(12) 123 45 67</Link>
                </div>
                <div className={styles.linkss}>
                <Link href="/">info@megatexnika.az</Link>
                </div>
                <div className={styles.col}>
                    <p>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</p>
                    <div className={styles.link}>
                    {data.map(({id,to,icon}: Imedia) => {
                        <Link key={id} href={to}>{icon}</Link>
                    })}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page