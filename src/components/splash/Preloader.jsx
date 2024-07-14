import React, { useEffect } from "react";
import styles from './Preloader.module.css'
import icon from '../../assets/skilletCooktop.svg'
import { preLoaderAnim } from "../../animations";

const Preloader = () => {
    
    useEffect(() => {
        preLoaderAnim();
    }, [])

    return (
        <div className={styles.preloader + " preloader"}>
            <div className={styles.appInfo + " app-info"}>
                <img className={styles.preloaderIcon + " preloader-icon"} src={icon} alt="icon"/>
                <p className={styles.appName + " app-name"}>Cooks Corner</p>
            </div>
            <p className={styles.appVersion + " app-version"}>Version 0.0.1</p>
        </div>
    )
}

export default Preloader;