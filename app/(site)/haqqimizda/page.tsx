import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'

const page = () => {
  return (
    <div>
        <div className='container'>
            <div className={styles.mega}>
                <h1>megaTexnika</h1>
                <p id={styles.info}>Haqqımızda</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
        </div>
        <div className={styles.bgshadow}>
            <div className='container'>
                <div className={styles.bgimg}></div>
            </div>
        </div>
        <div className="container">
        <div className={styles.about}>
        <div className={styles.jcb}>
          <Image src="/jcb-texnika.png" alt='texnika' width={364} height={494}/>
        </div>
        <div className={styles.habout}>
        <div className={styles.megatex}>
        <Image src="/mega-tex.png" alt='texnika' width={701} height={422}/>
        </div>
        <div className={styles.sinaq}>
        <h2>Mega Texnika-da sınaqdan keçirilmiş texnikalar</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
        </div>
        </div>
        </div>
        <div className={styles.esas}>
        <div className="container">
        <div className={styles.hflex}>
        <div className={styles.atech}>
          <h2>Niyə bizi seçməlisiniz</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          </p>
        </div>
        <div className={styles.imgborder}>
        <Image src="/cat.png" alt='texnika' width={541} height={355}/>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default page