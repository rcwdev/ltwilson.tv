// Module Imports
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Local Imports KKonaW
import styles from "../../styles/home.module.css";

function LoadingElement() {
    return <button className={styles.primary}>
        <FontAwesomeIcon icon={faCircleNotch} className="fa-spin"></FontAwesomeIcon>
    </button>
}

function LiveNowButton() {
    return <button className={styles.livenow} onClick={() => { location.href = "https://twitch.tv/theltwilson" }}>
        LIVE NOW <FontAwesomeIcon icon={faArrowRight} />
    </button>
}

function WatchLiveButton() {
    return <button className={styles.primary} onClick={() => { location.href = "https://twitch.tv/theltwilson" }}>
        Watch Live
    </button>
}

export default function Button() {
    let [element, setElement] = useState(<LoadingElement />)
    let url

    if (process.env.NODE_ENV === "development") {
        url = "http://localhost:3000"
    } else {
        url = "https://ltwilson.tv"
    }

    fetch(`${url}/api/islive?channel=theltwilson`)
        .catch(err => {
            console.error(err)
            setElement(<WatchLiveButton />)
        })
        .then(res => res.json())
        .then(body => {
            if (body.stream) {
                setElement(<LiveNowButton />)
            } else {
                setElement(<WatchLiveButton />)
            }
        })

    return element
}