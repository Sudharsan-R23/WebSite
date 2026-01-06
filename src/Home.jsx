import React from 'react'
import styles from './css/Home.module.css'
import HeadBanner from './assets/B1.png'
import steam from './assets/steam.png'
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
          <h1>Revenge of Realms</h1>
          <div>
            <button>Play Pc</button>
            <button>Play Pc</button>
          </div>
          <div className={styles.HomePlay}>
            <img className={styles.playicon} onClick={() =>{ playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation')} }
              src={steam} alt="" />
            <img className={styles.playicon} onClick={() =>{ playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation')} }
              src={epic} alt="" />
            <img className={styles.playicon} onClick={() =>{ playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation')} }
              src={ps} alt="" />
            <img className={styles.playicon} onClick={() =>{ playNav('https://www.youtube.com/results?search_query=how+to+use+wibsite+link+in+react+navigation')} }
              src={xbox} alt="" />
            

          </div>
        </div>
      </section>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusantium voluptatibus vitae. Tenetur accusamus sint a maiores nemo, rerum eius ipsa aliquam maxime saepe officia aperiam unde distinctio facilis, ex expedita debitis hic molestias temporibus reiciendis aut. Error quos fugit cupiditate! Illo praesentium dolorem velit molestiae incidunt architecto eos neque officia a, ad repellendus alias fugit enim, aut suscipit corporis quo consequuntur tempore vitae consectetur? Ea eveniet pariatur, distinctio earum expedita, illo placeat quia voluptate beatae sunt, quis animi blanditiis possimus ad. Aliquam saepe sapiente quod, repellat possimus eligendi laborum ipsam excepturi dolore fuga nam dicta magni nostrum vitae quasi culpa earum dolorem at alias quibusdam ut ab? Esse voluptatem, excepturi, minus voluptatibus iure fugit quam possimus accusantium error vel voluptatum adipisci, quod corporis! Error facilis nihil, dolorum illo vitae adipisci eos labore in molestias beatae alias inventore non iste praesentium nulla recusandae quia aut quidem accusamus, cum similique at? Facere quae reiciendis neque nulla provident atque amet dolorem dolore est delectus porro ad eveniet, nobis eaque tempore explicabo consequuntur? Repudiandae vero ut voluptate? Temporibus rerum eaque necessitatibus quae nesciunt illum assumenda ipsam inventore quos eius nemo laboriosam, libero beatae totam incidunt aliquid, cum, corrupti voluptates neque consequatur dolorem provident.</p>
    </>
  )
}
