import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { Ixeberler } from '@/Interface'

const page = async () => {
  const { data } = await axios.get('http://localhost:8000/xeberler/')
  return (
    <div>
      <div className="container">
      <div className={styles.hflex}>
        <div className={styles.atech}>
          <h2>Yeniliklər</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
        <div className={styles.imgborder}>
        <Image src="/little.png" alt='texnika' width={541} height={355}/>
        </div>
      </div>
      <div className={styles.flexer}>
        {data.map(({id,to,basliq,tarix,source}: Ixeberler) => {
          return (
            <Link href={to} key={id}>
            <div  className={styles.new}>
                  <Image src={source} alt='texnika' width={290} height={274} />
                  <div className={styles.padding}>
                  <p className={styles.p1}>{basliq}</p>
                  <div className={styles.flex}>
                  <p>{tarix}</p>
                  </div>
                  </div>
                </div>
            </Link>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default page