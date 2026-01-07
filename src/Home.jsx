import React from 'react'
import styles from './css/Home.module.css'
import HeadBanner from './assets/B1.png'
import Steam from './assets/Steam.png'
import epic from './assets/epic.png'
import ps from './assets/PS.png'
import xbox from './assets/Xbox.png'


export default function () {

  const playNav = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };


  return (
    <>
      <section className={styles.HeadLayer}>
        <img src={HeadBanner} className={styles.Banner} alt="" />
        <div className={styles.HeadLayer2}>
          <h1 className={styles.realmTitle}>Revenge of Realms</h1>

          <div className={styles.BtnGroup}>
            <button className={`${styles.gameBtn} ${styles.silver}`}>Play Pc</button>
            <button className={`${styles.gameBtn} ${styles.silver}`}>Play Pc</button>
          </div>
          <div className={styles.HomePlay}>
            <img className={styles.playicon} onClick={() => { playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation') }}
              src={Steam} alt="" />

            <img className={styles.playicon} onClick={() => { playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation') }}
              src={epic} alt="" />

            <img className={styles.playicon} onClick={() => { playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation') }}
              src={ps} alt="" />

            <img className={styles.playicon} onClick={() => { playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation') }}
              src={xbox} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
