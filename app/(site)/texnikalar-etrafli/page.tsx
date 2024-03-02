"use client"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from './style.module.css'
import Link from 'next/link'
import { Idescriptions } from '@/Interface'
import Carousel from 'react-multi-carousel'

const page = async () => {
    const data = await axios.get('http://localhost:8000/mehsul/')
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
            <div className={styles.auto}>
                <div className={styles.sekil}>
                    {data.data.map(({id,source}: any) => {
                        return (
                            <div key={id}>
                            <Image  src={source} alt='tex' width={71} height={50} />
                        </div>
                        )
                    })}
                </div>
                <div className={styles.div2}>
                    <Image src='/ekskavator.png' alt='tex' width={483} height={464} />
                </div>
                <div className={styles.div3}>
                <div className={styles.flex}>
                    <div className={styles.h3}>
                        <h3>Məhsulun adı</h3>
                        <p>Ekskavator</p>
                    </div>
                    <div className={styles.il}>
                        <p>2017</p>
                    </div>
                </div>
                <div className={styles.lorem}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>
                <div className={styles.flex}>
                    <p>Günlük icarə:</p>
                    <p><span>100 AZN</span></p>
                </div>
                <div className={styles.flex}>
                    <p>Aylıq icarə:</p>
                    <p><span>1000 AZN</span></p>
                </div>
                <Link href="/"><button>Günlük icarə et</button></Link>
                </div>
            </div>
            <div className={styles.oxsar}>
                <h4>Oxşar texnikalar</h4>
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
                </div>)
                })}
                </Carousel>
            </div>
            </div>
        </div>
    </div>
  )
}

export default page