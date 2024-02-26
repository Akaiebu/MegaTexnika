import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { xeber } from '@/Components/data'

const page = () => {
  return (
    <div className={styles.body}>
      <div className='vektor'>
        <Image src='/Vector.png' alt='x' width={354} height={554} />
      </div>
      <div className='container'>
      <div>
        {xeber.map(({id,basliq,tarix,melumat,source}) => {
          return (
            <div className={styles.flex} key={id}>
              <div className={styles.xeber}>
              <h4>{basliq}</h4>
              <p>{tarix}</p>
              <p>{melumat}</p>
              </div>
              <div className={styles.border}>
                <Image src={source} alt='tex' width={628} height={406} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default page