"use client"
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const Icareedildi = () => {
    const [active, setActive] = useState(false);
    const [data , setData] = useState([]) 
    useEffect(() => {
    axios.get('http://localhost:8000/mehsul/').then(({data}) =>{setData(data)})
    },[])
  return (
    <div>
        <div className={active ? styles.activeback : styles.back}>
        <div className={styles.block}>
        <div className={styles.icare}>
            <h4>Məlumatları doldurun</h4>
            <form action="">
                <input type="text" name="ad" id="ad" placeholder='Ad və Soyad*'/>
                <input type="tel" name="nomre" id="nomre" placeholder='Əlaqə nömrəsi*'/>
                <input type="email" name="email" id="email" placeholder='E-mail*'/>
                <input type="text" name="company" id="company" placeholder='Şirkətin adı'/>
                <input type="button" id={styles.icra} value="İcare et"/>
            </form>
            <div onClick={() => setActive(!active)} className={styles.activeHamburger}></div>
        </div>
        </div>
    </div>
    <div className='container'>
    <div className={styles.auto}>
                <div className={styles.sekil}>
                    {data.map(({id,source}: any) => {
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
                <Link href=""><button onClick={() => setActive(!active)}>Günlük icarə et</button></Link>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Icareedildi