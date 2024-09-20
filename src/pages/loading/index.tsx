import React, { FC, Fragment } from "react";
import styles from './index.module.scss';

const Loading: FC = () => {

    return (<Fragment>
        <div className={styles.main}>
            <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div className={styles.base}>
                <span></span>
                <div className={styles.face}></div>
            </div>
        </div>
        <div className={styles.longfazers}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1 className={styles.redirect}>Redirecting</h1>
    </Fragment>)

}

export default Loading;