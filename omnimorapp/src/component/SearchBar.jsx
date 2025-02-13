import React from 'react';
import styles from './SearchBar.module.css';


function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input className={styles.input} type="text" placeholder="Search" />
            
        </div>
    )
}

export default SearchBar;
{/* <a href="https://www.flaticon.com/free-icons/discover" title="discover icons">Discover icons created by Smashicons - Flaticon</a> */}