"use client"
import axios from 'axios'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Idescriptions, Iimages } from '@/Interface'

const page = async () => {
  const data = await axios.get('http://localhost:8000/images/')
  const datas = await axios.get('http://localhost:8000/descriptions/')
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 3,
      slidesToSlide: 2
    },
    middle: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  return (
    <div>
      <div className="container">
        <div className={styles.texnikalar}>
        <h4 className={styles.center}>Texnikalar</h4>
        <div className={styles.disflex}>
          <Link href='/'><p>Hamısı</p></Link>
        {data.data.map(({id,to,title}: Iimages) => {
          return (
            <Link href={to} key={id}>
              <div className={styles.tech}>
                <p>{title}</p>
              </div>
            </Link>)
          })}
        </div>
        </div>
        <div>
        <Carousel
        containerClass={styles.arrows}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        >
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
              </div>
            )
          })}
        </Carousel>
        </div>
      </div>
    </div>
  )
}

export default page