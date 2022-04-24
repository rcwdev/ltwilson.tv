// Module Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Head from "next/head";
import dynamic from 'next/dynamic';
import "@fontsource/open-sans";

// Local Imports KKonaW
import logo from "../public/img/logo.png";
import styles from "../styles/Home.module.css";

let WatchLiveButton = dynamic(() => import('../components/home/WatchLiveButton'))

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lt. Wilson</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.9"></meta>
      </Head>
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.socials}>
            <a href="https://twitter.com/theltwilson" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="https://instagram.com/theltwilson" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </div>

          <div className={styles.logo_wrapper}>
            <Image alt='Logo for Lt. Wilson' src={logo} />
          </div>

          <div className={styles.socials}>
            <a href="https://youtube.com/ltwilsonyt" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
            <a href="https://twitch.tv/theltwilson" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>
            </a>
          </div>
        </div>

        <div className={styles.details}>
          <h1>TheLtWilson</h1>
          <p>A god gamer. Also a <a href="https://github.com/rcwdev" target="_blank" rel="noreferrer">developer,</a> video editor, and motion graphics designer.</p>
        </div>

        <div className={styles.navigation}>
          <button className={styles.secondary} onClick={() => {
            location.href = "./tools"
          }}>View Tools</button>

          <WatchLiveButton />
        </div>
      </div>
    </div>
  );
}
