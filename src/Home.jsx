import React from 'react'
import NavBar from './NavBar'
import Banner from './assets/B1.png'
import ROR from './assets/rort1.png'
import styles from './css/Home.module.css'
import play from './assets/game.png'

export default function Home() {
  return (
    <div >
      <NavBar />
      <div className={styles.bannerContainer}>
        <img src={Banner} alt="" />
        <div className={styles.RORTitle}>
          <img src={ROR} alt="" />
        </div>
        <div className={styles.HomeButton}>
          <button>Play Mobile</button>
          <button>Play PC</button>
        </div>
        <div className={styles.HomePlay}>
          <img src={play} alt="" />
          <img src={play} alt="" />
          <img src={play} alt="" />
          <img src={play} alt="" />
        </div>
      </div>
    </div>
  )
}
