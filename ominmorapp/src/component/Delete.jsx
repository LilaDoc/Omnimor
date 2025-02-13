import React from 'react';
import styles from './Delete.module.css';
import deleteIcon from '/assets/trash.png';

function Delete() {
    return (
        <button className={styles.delete}>
            <img src={deleteIcon} alt="Delete" />
        </button>
    );
}

export default Delete;