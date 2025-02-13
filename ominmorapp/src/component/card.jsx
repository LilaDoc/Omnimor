import React, { useState } from 'react';
import styles from './card.module.css';
import CardToolBar from './CardToolBar';

function Card(props) {
  const handleCardClick = (e) => {
    // Empêcher le clic si on clique sur la toolbar
    if (!e.target.closest(`.${styles.cardToolBar}`)) {
      props.handleArticleClick();
    }
  };
    
  return (
    
        <div className={styles.cardContent} key={props.id} onClick={handleCardClick} >
           <div className={styles.cardCheckbox}>
            <input type="checkbox" className={styles.checkBox}/>
           </div>
           <span className={styles.cardImg}><p>{props.title.slice(0, 3)}</p></span>
           <div className={styles.cardTitleContainer}>
                <div className={styles.metaText}>
                    <p>a month ago • 10 min read</p>
                </div>
                     <p className={styles.cardTitle} >
                    {props.title}
                    </p>
                <div className={styles.metaText}>
                    <p>Author| Website</p>
                 </div>
           </div>
           <div className={styles.cardToolBar}>
             <CardToolBar 
                id={props.id} 
                deleteArticle={props.deleteArticle}
             />
           </div>
         
        </div>
   
  );
}

export default Card;
