import styles from './Settings.module.css';


function Settings(props) {
    return (
        <div className={styles.settings}>
            <span className={styles.userLetter}><p>U</p></span>
            <button >User</button>
            <button className={styles.addButton} onClick={props.showAddPopup}>Add</button>

        </div>
    )
}

export default Settings;