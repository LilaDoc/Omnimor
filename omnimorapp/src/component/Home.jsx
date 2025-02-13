import React, { useState } from 'react';
import Liste from './Liste';
import styles from './Home.module.css';
import ToolBar from './ToolBar';
import Gridview from './Gridview';

function Home(props) {
    const [view, setView] = useState('grid');

    return (
        <div className={styles.home}>
            <div className={styles.viewButton}>
             {view === 'grid' ? (
                 <button className={styles.listButton} onClick={() => setView('list')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-560v160-160Zm0 400v160-160Z"/></svg></button>
                
            ) : (
                <button className={styles.gridButton} onClick={() => setView('grid')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg></button>
            )}
            </div>
            <ToolBar 
                onAddArticle={props.onAddArticle}
                onReadArticle={props.onReadArticle}
                handleChange={props.handleChange}
            />
            {view === 'grid' ? (
                <Gridview articles={props.articles} onArticleClick={props.onArticleClick} deleteArticle={props.deleteArticle}/>
            ) : (
                <Liste articles={props.articles} onArticleClick={props.onArticleClick} deleteArticle={props.deleteArticle}/>
            )}
        </div> 

    )
}

export default Home;

{/* <a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by Freepik - Flaticon</a> */}