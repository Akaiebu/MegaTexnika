import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'

const page = () => {
  return (
    <div>
        <div className="container">
            <div className={styles.flex}>
                <div className={styles.icare}>
                    <h2>İcarə şərtləri</h2>
                    <div className={styles.imgborder}>
                    <Image src="/texnika-6.png" alt="" width={364} height={494}/>
                    </div>
                </div>
                <div className={styles.sert}>
                    <div className={styles.imgborder}>
                    <Image src="/texnika-5.png" alt="" width={701} height={422}/>
                    </div>
                    <div className={styles.sinaq}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div>
            <div className={styles.sual}>
                <h2>Tez-tez verilən suallar</h2>
            </div>
            <div className={styles.suallar}>
                <p>Lorem Ipsum is simply dummy text of the printing and type?</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</p>
                <p>Lorem Ipsum is simply dummy text of the printing?</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply?</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting?</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default page