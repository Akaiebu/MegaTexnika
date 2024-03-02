"use client"
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import axios from 'axios';
import { Iheadlinks } from '@/Interface';
import Image from 'next/image';

const HamburgerMenu =  () => {
  const [active, setActive] = useState(false);
  const [data , setData] = useState([]) 
  useEffect(() => {
    axios.get('http://localhost:8000/headlinks/').then(({data}) =>{setData(data)})
},[])
  
  return (
    <div className={styles.container}>
      <div onClick={() => setActive(!active)}>
      <div className={active ? styles.activeHamburger : styles.hamburger}>
      </div>
      </div>
      <div className={active ? styles.activeSidenav : styles.sidenav}>
      <div className={styles.logo}>
      <Link href="/">
                <Image src="/logo.png" alt='logo' width={168} height={38}/>
      </Link>
      </div>
      {data.map(({id,to,title}: Iheadlinks) => {
                return (<Link key={id} href={to}>{title}</Link>)})}
      </div>
    </div>
  );
};

export default HamburgerMenu;