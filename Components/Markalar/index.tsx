import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'

const Markalar = () => {
  return (
    <div>
        <h4>Markalar</h4>
        <div className={styles.body}>
		<div className={styles.slider}>
	    <div className={styles.slidetrack}>
		<div className={styles.slide}>
            <Image src="/hyundai.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/hitachi.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/bobcats.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/komatsu.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/case.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/cats.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/liugong.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
            <Image src="/hyundai.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/hitachi.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/bobcats.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/komatsu.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/case.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/cats.png" alt='marka' width={143} height={23} />
		</div>
		<div className={styles.slide}>
			<Image src="/liugong.png" alt='marka' width={143} height={23} />
		</div>
	    </div>
        </div>
		</div>
    </div>
  )
}

export default Markalar