import React from 'react';
import styles from './CheckBox.module.css';

function CheckBox(props) {
    return (
        <label className={styles.container}>
                <input type="checkbox" className={styles.cardCheckbox} />
                <span className={styles.checkmark}></span>
            </label>
    );
}

export default CheckBox;