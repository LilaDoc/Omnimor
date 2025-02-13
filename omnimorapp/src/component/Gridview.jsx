import React from 'react';
import GridCard from './GridCard';
import styles from './GridView.module.css';

function Gridview(props) {
  return (
    <div className={styles.liste}>
      {props.articles.map((article) => (
        <GridCard className={styles.listeCard}
          title={article.title}
          key={article.id}
          handleArticleClick={() => props.onArticleClick(article)} 
          deleteArticle={props.deleteArticle}
          id={article.id}
        />
        ))}
    </div>
  );
}

export default Gridview;