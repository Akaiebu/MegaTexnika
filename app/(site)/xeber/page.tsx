import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import axios from 'axios'
import { Ixeber } from '@/Interface'

const page = async () => {
  const { data } = await axios.get('http://localhost:8000/xeber/')
  return (
    <div className={styles.body}>
      <div className='vektor'>
        <Image src='/Vector.png' alt='x' width={354} height={554} />
      </div>
      <div className='container'>
      <div>
        {data.map(({id,basliq,tarix,melumat,source}: Ixeber) => {
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