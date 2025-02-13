import React from 'react';
import styles from './LeftBarButton.module.css';
import mainMenu from '/assets/main-menu.png';

function LeftBarButton(props) {
    return (
        <div className={styles.leftBarButton} onClick={props.toggleLeftBar}>
            <img className={styles.mainMenu} src={mainMenu} alt="mainMenu" />
        </div>
    )
}

export default LeftBarButton;