import React from 'react'
import NavBar from './NavBar'
import Banner from './assets/B1.png'
import ROR from './assets/rort1.png'
import styles from './css/Home.module.css'
import play from './assets/game.png'

export default function Home() {

  const playNav = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div >
      <NavBar />
      <div className={styles.bannerContainer}>
        <img src={Banner} alt="" />
        <div className={styles.RORTitle}>
          <img src={ROR} alt="" />
        </div>
        <div className={styles.HomeButton}>
          <button className={`${styles.gameBtn} ${styles.silver}`} >Play Mobile</button>
          <button className={`${styles.gameBtn} ${styles.silver}`}>Play PC</button>
        </div>
        <div className={styles.HomePlay}>
          <img onClick={() =>  palyNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation') } src={play} alt="" />
          <img src={play}
            alt="Play"
            onClick={() => playNav("https://store.steampowered.com/")} />
          <img src={play}
            alt="Play"
            onClick={() => playNav("https://www.epicgames.com/site/en-US/home?sessionInvalidated=true")} />
          
        </div>
      </div>
    </div>
  )
}
