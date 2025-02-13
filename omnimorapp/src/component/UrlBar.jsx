import React from 'react';
import styles from './UrlBar.module.css';

function UrlBar(props) {
    return (
        <div className={styles.urlBarContainer}>
            <input 
                className={styles.homeUrlBar}
                type="text" 
                placeholder="Enter URL" 
                onChange={props.handleChange} 
            />
            {props.endIcon}
        </div>
    )
}

export default UrlBar;