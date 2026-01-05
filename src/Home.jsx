import NavBar from './NavBar'
import Banner from './assets/B1.png'
import ROR from './assets/rort1.png'
import styles from './css/Home.module.css'
import Steam from './assets/Steam.png'
import epic from './assets/epic.png'
import PS from './assets/PS.png'
import XBox from './assets/Xbox.png'

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
          <img onClick={() =>{ palyNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation')} } 
          src={Steam} alt="" />
          <img src={epic}
            alt="Play"
            onClick={() =>{ playNav("https://store.steampowered.com/")}} />
          
          <img src={PS}
            alt="Play"
            onClick={() =>{ playNav("https://www.epicgames.com/site/en-US/home?sessionInvalidated=true")}} />
          
          <img src={XBox}
            alt="Play"
            onClick={() =>{ playNav("https://www.epicgames.com/site/en-US/home?sessionInvalidated=true")}} />
        </div>
      </div>
    </div>
  )
}
