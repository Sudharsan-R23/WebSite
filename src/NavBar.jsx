import { useEffect, useState } from 'react'
import Logo from './assets/game.png'
import { Link } from 'react-router-dom'
import YT from './assets/YT.png'
import Insta from './assets/insta.png'
import X from './assets/X.png'
import styles from './css/NavBar.module.css'

export default function () {
    const [mobile, setMobile] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={styles.NavContainer}>
                <div>
                    <img className={styles.logo} src={Logo} alt="" />
                </div>
                <div>
                    <div className={styles.NavList}>

                        <div>
                            <details className={styles.socialDropdown}>
                                <summary className={styles.summary}>Follow Us</summary>

                                <div className={styles.socialMenu}>
                                    <Link to={{ pathname: "https://facebook.com" }} target="_blank">
                                        <img
                                            src={YT}
                                            alt="Youtube"
                                            className={styles.icon}
                                        />
                                    </Link>

                                    <Link to={{ pathname: "https://instagram.com" }} target="_blank">
                                        <img
                                            src={Insta}
                                            className={styles.icon}
                                        />
                                    </Link>

                                    <Link to={{ pathname: "https://twitter.com" }} target="_blank">
                                        <img
                                            src={X}
                                            alt="X"
                                            className={styles.icon}
                                        />
                                    </Link>
                                </div>
                            </details>
                        </div>
                        <div>CHARACTERS</div>
                        <div>EVENTS</div>
                        <div>REDEEM</div>

                    </div>
                    <div onClick={() => { setMobile(!mobile) }} className={styles.NavButton}>{<button
                        className={`${styles.menu} ${active ? styles.active : ""}`}
                        onClick={() => setActive(!active)}
                        aria-label="Menu"
                    >
                        <svg viewBox="0 0 64 48">
                            <path d="M19,15 L45,15 C70,15 58,-2 49.0177,7 L19,37" />
                            <path d="M19,24 L45,24 C61.2371,24 57,49 41,33 L32,24" />
                            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37" />
                        </svg>
                    </button>}</div>
                </div>
            </div>

            <div className={`${styles.sidenavbar} ${mobile ? styles.active : ""}`}>
                <div>CHARACTERS</div>
                <div>EVENTS</div>
                <div>REDEEM</div>

                <div className={styles.siteSocialIcons}>
                    <Link to={{ pathname: "https://facebook.com" }} target="_blank">
                        <img src={YT} className={styles.icon} />
                    </Link>
                    <Link to={{ pathname: "https://instagram.com" }} target="_blank">
                        <img src={Insta} className={styles.icon} />
                    </Link>
                    <Link to={{ pathname: "https://twitter.com" }} target="_blank">
                        <img
                            src={X}
                            alt="X"
                            className={styles.icon}
                        />
                    </Link>

                </div>
            </div>

        </>

    )
}
