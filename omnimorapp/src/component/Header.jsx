import React, { useState } from 'react';
import styles from './Header.module.css';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
function Header(props) {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleClick = () => {
        setShowSearchBar(true);
    }
    return (
        <div className={styles.header}>
            <h1>OmniMor</h1>
            <div className={styles.searchContainer}>
                {showSearchBar && <SearchBar/>}
                <SearchButton handleClick={handleClick} />
            </div>
            
        </div>

    )
}

export default Header;