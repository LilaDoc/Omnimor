import React from 'react';
import styles from './Read.module.css';
import readIcon from '/assets/read.png';

function Read(props) {
    return (
        <button className={styles.read} onClick={props.onReadArticle}>
            <img className={styles.readIcon} src={readIcon} alt="Read Article" />
        </button>
    );
}

export default Read;