import React, { useState } from 'react';
import styles from './SearchButton.module.css';
import searchIcon from '/assets/search.png';

function SearchButton(props ) {
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);
    
    const handleClick = () => {
        setSearchButtonClicked(true);
        props.handleClick();
    }
    
    return (
        <button className={searchButtonClicked ? styles.searchButtonClicked : styles.searchButton} onClick={handleClick}>
            <img className={styles.searchIcon} src={searchIcon} alt="Search" />
        </button>
    );
}

export default SearchButton;