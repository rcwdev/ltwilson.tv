// Module Imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitch, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Head from "next/head";
import "@fontsource/open-sans";

// Local Imports KKonaW
import logo from "../public/img/logo.png";
import styles from "../styles/Home.module.css";

let url

if (process.env.NODE_ENV === "development") {
  url = "http://localhost:3000"
} else {
  url = "https://ltwilson.tv"
}

function Page({data}) {
  let LiveButton = function LiveButton() {
    return <button className={styles.primary} onClick={() => {
      location.href = "https://twitch.tv/theltwilson"
    }}>Watch Live</button>
  }

  if (data.stream) {
    LiveButton = function LiveButton() {
      return <button className={styles.livenow} onClick={() => {
        location.href = "https://twitch.tv/theltwilson"
      }}>NOW LIVE</button>
    }
  }

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
          }}>View Tools
          </button>

          <LiveButton/>
        </div>
        </div>
      </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${url}/api/islive?channel=theltwilson`)
  const data = await res.json()

  return {props: {data}}
}

export default Page
