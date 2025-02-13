import React from 'react';
import styles from './LeftBar.module.css';
import Menu from './Menu';
import Settings from './Settings';

import Shortcuts from './Shortcuts';

function LeftBar(props) {
    return (
        <div className={styles.leftBar}>
            <div className={styles.leftBarContent}>
            
             <div className={styles.firstRow}>
                <Menu/>
            </div>
            <div className={styles.secondRow}>
                    {/* <Shortcuts/> */}
            </div>
            </div>

            <div className={styles.leftBarFooter}>   
                <Settings showAddPopup={props.showAddPopup}/>
            </div> 
        </div>

    )
}

export default LeftBar;