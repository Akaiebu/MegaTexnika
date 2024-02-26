import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './style.module.css'
import { description, images, yenilik } from '@/Components/data'

const page = () => {
  return (
      <div className='body'>
      <div className='container'>
      <div className={styles.hflex}>
        <div className={styles.atech}>
          <h2>Ağır texnikanızı bizdən satın alın</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          <Link href="/haqqimizda"><button>Ətraflı</button></Link>
        </div>
        <div className={styles.imgborder}>
        <Image src="/image.png" alt='texnika' width={541} height={355}/>
        </div>
      </div>
      <div className={styles.kateqoriyalar}>
        <h4>Kateqoriyalar</h4>
        <div className={styles.kateqoriya}>
          {images.map(({id,to,title,source}) => {
            return (
              <Link href={to} key={id}>
              <div className={styles.tech}>
                <h6>{title}</h6>
                <Image src={source} alt='texnika' width={290} height={254} />
              </div>
            </Link>
            )
          })}
        </div>
      </div>
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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        <Link href="/haqqimizda"><button>Haqqımızda</button></Link>
        </div>
        </div>
      </div>
      <div className={styles.texnikalar}>
        <h4>Texnikalar</h4>
        <div className={styles.mehsul}>
          {description.map(({id,title,il,qiymet_ay,qiymet_gun,mezenne,source}) => {
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
                <div className={styles.center}>
                <Link href="/"><button>İcarə et</button></Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
          <div className={styles.centered}>
            <Link href="/"><button className={styles.button}>Hamısına bax</button></Link>
          </div>
      </div>
          <div className={styles.marka}>
            <h4>Markalar</h4>
            <Image src="/markalar.png" alt='marka' width={1250} height={46} />
          </div>
      <div className='container'>
        <div className={styles.yeni}>
          <h4>Yeniliklər</h4>
          <div>
            <div className={styles.flexer}>
            {yenilik.map(({id,basliq,info,tarix,source}) => {
              return (
                  <div key={id} className={styles.new}>
                  <Image src={source} alt='texnika' width={290} height={228} />
                  <div className={styles.padding}>
                  <p className={styles.p1}>{basliq}</p>
                  <p className={styles.p2}>{info}</p>
                  <div className={styles.flex}>
                  <p>{tarix}</p>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.241931 0.471448C0.366934 0.346444 0.536476 0.276218 0.713257 0.276218C0.890039 0.276218 1.05958 0.346444 1.18458 0.471448L4.95519 4.24205C5.08019 4.36706 5.15042 4.5366 5.15042 4.71338C5.15042 4.89016 5.08019 5.0597 4.95519 5.1847L1.18458 8.95531C1.05958 9.08031 0.890039 9.15054 0.713257 9.15054C0.536476 9.15054 0.366934 9.08031 0.241931 8.95531C0.116928 8.83031 0.0467018 8.66077 0.046702 8.48398C0.0467018 8.3072 0.116928 8.13766 0.241931 8.01266L3.54121 4.71338L0.241931 1.4141C0.116928 1.2891 0.0467018 1.11955 0.046702 0.942773C0.0467018 0.765992 0.116928 0.596451 0.241931 0.471448Z" fill="#FFC01F"/>
                  </svg>
                  </div>
                  </div>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
        <div className={styles.back}>
          <div className='container'>
            <div className={styles.grid}>
            <div className={styles.contact}>
              <h4>Bizimlə əlaqə saxla!</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              <div className={styles.inputs}>
                <form action="https://getform.io/f/Pe9qn4eL" method='POST'>
                <input type="text" name="ad" id="ad"  placeholder='Ad'/>
                <input type="text" name="soyad" id="soyad" placeholder='Soyad'/>
                <input type="email" name="mail" id="mail"  placeholder='E-mail'/>
                <input type="tel" name="telefon" id="telefon"  placeholder='Telefon'/>
                <input type="submit" id={styles.gonder} className={styles.gonder} value="Göndər" />
                </form>
              </div>
            </div>
            <div className={styles.truck}>
              <Image src="/3cx.png" alt='texnika' width={691} height={400}/>
            </div>
            </div>
          </div>
        </div>
        <div className={styles.esas}>
        <div className="container">
        <div className={styles.hflex}>
        <div className={styles.atech}>
          <h2>Niyə bizi seçməlisiniz</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
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