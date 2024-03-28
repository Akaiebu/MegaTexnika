import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.css'
import { Idescriptions } from '@/Interface'
import Icareedildi from '@/Components/Icareet'

const page = async () => {
    const datas = await axios.get('http://localhost:8000/descriptions/')
  return (
    <div>
        <Icareedildi/>
        <div className="container">
            <div className={styles.oxsar}>
                <h4>Oxşar texnikalar</h4>
                <div className={styles.flexe}>
                {datas.data.map(({id,title,il,qiymet_ay,qiymet_gun,mezenne,source}: Idescriptions) => {
                return (
                <div className={styles.icare} key={id}>
                <Image src={source} alt='texnika' width={290} height={264} />
                <div className={styles.product}>
                <p className={styles.first}>Məhsulun adı</p>
                <p className={styles.sec}>{title}</p>
                <p className={styles.third}>{il}</p>
                <p className={styles.mez}>{qiymet_ay} {mezenne} / ay</p>
                <p className={styles.mez}>{qiymet_gun} {mezenne} / gün</p>
                </div>
                <div className={styles.centere}>
                <Link href="/texnikalar-etrafli"><button>İcarə et</button></Link>
                </div>
                </div>)
                })}
            </div>
            </div>
        </div>
    </div>
  )
}

export default page