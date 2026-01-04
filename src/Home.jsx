import React from 'react'
import NavBar from './NavBar'
import Banner from './assets/B1.png'
import ROR from './assets/rort1.png'
import styles from './css/Home.module.css'

export default function Home() {
  return (
    <div >
      <NavBar />
      <div className={styles.bannerContainer}>
        <img src={Banner} alt="" />
        <div className={styles.RORTitle}>
          <img src={ROR} alt="" />
        </div>
      </div>
    </div>
  )
}
