import React from "react";
import styles from './HeadMessage.module.css'

const HeadMessage = ({ ordinaryText, boldText }) => {
    return (
        <div className={styles.info}>
            <div className={styles.infoContainer}>
                <p className={styles.ordinaryText}>{ordinaryText + " "} <strong className={styles.boldText}>{boldText}</strong></p>
            </div>
        </div>
    );
}

export default HeadMessage;
