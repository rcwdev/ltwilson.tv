// Module Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// Local Imports KKonaW
import styles from '../styles/home.module.css';
import copege from '../public/img/emotes/Copege.png';

export default function Tools() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className="text_center">
                    <Image src={copege}></Image>
                    <h1>Soon.</h1>
                    <a href="../"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>&nbsp;Go back</a>
                </div>
            </div>
        </div>
    )
}