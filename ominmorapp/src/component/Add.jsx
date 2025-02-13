import React, { useState } from 'react';
import styles from './Add.module.css';
import addIcon from '/assets/add.png'; 

function Add({ onClose, addArticle }) {
    const [url, setUrl] = useState('');
    const handleChange = (e) => {
        setUrl(e.target.value);
    };
    const handleSubmit = () => {
        addArticle(url);
        // onClose();
    };

    return (
        <div className={styles.container}>

                <div className={styles.popup}>
                    <div className={styles.popupHeader}>
                        <button className={styles.closeButton} onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> </button>
                    </div>
                    <input  
                        className={styles.url} 
                        type="text" 
                        onChange={handleChange}
                        placeholder="https://example.com/" 
                    />

                        
                        <button className={styles.addButton} onClick={handleSubmit}>Add</button>
                        

                </div>

        </div>
    );
}

export default Add;