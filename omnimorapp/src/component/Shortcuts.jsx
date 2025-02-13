import React, { useState } from 'react';
import styles from './Shortcuts.module.css';

// import { ReactComponent as FolderIcon } from '/assets/folder.svg';
function Shortcuts() {
    const savedSearches=["Saved Searches 1", "Saved Searches 2", "Saved Searches 3", "Saved Searches 4", "Saved Searches 5", "Saved Searches 6", "Saved Searches 7", "Saved Searches 8", "Saved Searches 9", "Saved Searches 10"];
    const openIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"/></svg>;
    const closedIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg>;
    const [shortcutsState, setShortcutsState] = useState([{name: "labels", isOpen: false}, {name: "subscriptions", isOpen: false}, {name: "savedSearches", isOpen: false}]);
    const searchListIcon= <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368"><path d="M200-800v241-1 400-640 200-200Zm80 400h140q9-23 22-43t30-37H280v80Zm0 160h127q-5-20-6.5-40t.5-40H280v80ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v100q-19-8-39-12.5t-41-6.5v-41H480v-200H200v640h241q16 24 36 44.5T521-80H200Zm460-120q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM864-40 756-148q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T812-204L920-96l-56 56Z"/></svg>;
    function handleClick(e) {
        const name = e.currentTarget.name;
        setShortcutsState(shortcutsState.map(shortcut => 
            shortcut.name === name ? {...shortcut, isOpen: !shortcut.isOpen} : shortcut
        ));
    }


    return (
        <div className={styles.shortcuts}>
                    <h2 className={styles.shortcutsTitle}>Shortcuts</h2>
                    <div >
                        
                        <button className={styles.labels} name="labels" onClick={handleClick}>
                            {shortcutsState[0].isOpen ? openIcon : closedIcon}
                            <span className={styles.labelsText}>Labels</span>
                        </button>
                        <div className={styles.labelsList}>
                            {shortcutsState[0].isOpen && savedSearches.map((search, index) => (
                                <span  className={styles.labelsItem} key={index}>{searchListIcon} {search}</span>
                            ))}
                        </div>
                    </div>
                    <div >
                            <button className={styles.labels} name="subscriptions" onClick={handleClick}>
                            {shortcutsState[1].isOpen ? openIcon : closedIcon}
                            <span className={styles.labelsText}>Subscriptions</span>
                        </button>
                    </div>
                    <div >
                        <button className={styles.labels} name="savedSearches" onClick={handleClick}>
                            {shortcutsState[2].isOpen ? openIcon : closedIcon}
                            <span className={styles.labelsText}>Saved Searches</span>
                        </button>
                    </div>

        </div>
    )
}

export default Shortcuts;