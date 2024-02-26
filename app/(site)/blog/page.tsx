import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { xeberler } from '@/Components/data'

const page = () => {
  return (
    <div>
      <div className="container">
      <div className={styles.hflex}>
        <div className={styles.atech}>
          <h2>Yeniliklər</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
        <div className={styles.imgborder}>
        <Image src="/little.png" alt='texnika' width={541} height={355}/>
        </div>
      </div>
      <div className={styles.flexer}>
        {xeberler.map(({id,to,basliq,tarix,source}) => {
          return (
            <Link href={to}>
            <div key={id} className={styles.new}>
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