"use client"
import React from 'react'
import styles from './style.module.css'
import { descriptions, images } from '@/Components/data'
import Link from 'next/link'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const page = () => {
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
  const rows = [
    {id: 1 , descriptions },
    {id: 2 , descriptions },
    {id: 3 , descriptions },
    {id: 4 , descriptions },
    {id: 5 , descriptions },
    {id: 6 , descriptions },
    {id: 7 , descriptions },
    {id: 8 , descriptions },
    {id: 9 , descriptions },
    {id: 10 , descriptions },
    {id: 11 , descriptions },
    {id: 12, descriptions },
  ]
  return (
    <div>
      <div className="container">
        <div className={styles.texnikalar}>
        <h4 className={styles.center}>Texnikalar</h4>
        <div className={styles.disflex}>
          <Link href='/'><p>Hamısı</p></Link>
        {images.map(({id,to,title}) => {
          return (
            <Link href={to} key={id}>
              <div className={styles.tech}>
                <p>{title}</p>
              </div>
            </Link>
            )
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
            {rows.map(({id,descriptions}) => {
              return (
                <div className={styles.rowsmap} key={id}>
                  {descriptions.map(({id,title,il,qiymet_ay,qiymet_gun,mezenne,source}) => {
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
                <Link href="/"><button>İcarə et</button></Link>
                </div>
              </div>
            )
          })}
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