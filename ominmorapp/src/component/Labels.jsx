import React from 'react';
import styles from './Labels.module.css';

function Labels() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.labelsContainer}>
                <div className={styles.header}>
                    <button>quit</button>
                    <p>Labels</p>
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" name="label" id="label" placeholder="Add Labels" />
                </div>

               <div className={styles.labelBody}>

                        <p>Label 1</p>


                        <p>Label 2</p>


                        <p>Label 3</p>

                </div>
            </div>
            <div className={styles.labelFooter}>
                <button>Add New Label</button>
            </div>
        </div>
    );
}

export default Labels;