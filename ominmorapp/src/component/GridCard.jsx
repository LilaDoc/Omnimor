import React from 'react';
import styles from './GridCard.module.css';
import CardToolBar from './CardToolBar';

function GridCard(props) {
    return (
        <div className={styles.gridCard} >
            <div className={styles.gridCardToolBar}>
                <CardToolBar id={props.id} deleteArticle={props.deleteArticle}/>
            </div>
            <div className={styles.gridCardHeader}onClick={props.handleArticleClick}>
                <input type="checkbox" />
                <h1>{props.title}</h1>
            </div>
            <div className={styles.gridCardBody}onClick={props.handleArticleClick}>
                <div className={styles.gridCardBodyContent}>
                    <p className={styles.gridCardMeta}>a month ago 5min read</p>
                    <p className={styles.gridCardTitle}>{props.title}</p>
                    <p className={styles.gridCardMeta}>Other| source</p>
                </div>
                
            </div>

        </div>
    );
}

export default GridCard;