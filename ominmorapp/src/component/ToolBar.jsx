import React from 'react';
import styles from './ToolBar.module.css';
import UrlBar from './UrlBar';

function ToolBar(props) {
    const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>;
    
    return (
        <div className={styles.toolBar}>
            <input type="checkbox" className={styles.checkBox}/>
            <UrlBar 
                handleChange={props.handleChange} 
                endIcon={
                    <div className={styles.toolBarButton}>
                        {deleteIcon}
                    </div>
                }
            />
        </div>
    );
}

export default ToolBar;     