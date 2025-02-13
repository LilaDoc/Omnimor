import React from 'react';
import styles from './Menu.module.css';
import home from '/assets/home.png';
import library from '/assets/library.png';
import subscriptions from '/assets/subscriptions.png';
import highlights from '/assets/highlight.png';
import archives from '/assets/archive.png';
import trash from '/assets/trash.png';
function Menu(props) {
    return (
        <div className={styles.menu}>
            <button className={styles.menuButton} ><img className={styles.menuIcon} src={home} alt="home" />Home</button>
            {/* <button className={styles.menuButton}><img className={styles.menuIcon} src={library} alt="library" />Library</button>
            <button className={styles.menuButton}><img className={styles.menuIcon} src={subscriptions} alt="subscriptions" />Subscriptions</button>
            <button className={styles.menuButton}><img className={styles.menuIcon} src={highlights} alt="highlights" />Highlights</button>
            <button className={styles.menuButton}><img className={styles.menuIcon} src={archives} alt="archives" />Archives</button>
            <button className={styles.menuButton}><img className={styles.menuIcon} src={trash} alt="trash" />Trash</button> */}

        </div>
    )
}

export default Menu;