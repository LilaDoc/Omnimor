import { useState, useEffect } from 'react'
import styles from './App.module.css'
import axios from 'axios'
import Article from './Article'
import LeftBar from './LeftBar'
import Home from './Home'
import LeftBarButton from './LeftBarButton'
import Add from './Add'

function App() {
  const [article, setArticle] = useState("");
  const [url, setUrl] = useState("");
  const [articles, setArticles] = useState([]);



//fetch articles  

  useEffect(() => {
    const fetchArticles = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/articles`);
            setArticles(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    fetchArticles();
  }, []);

//submit url to get article
  const submitUrl = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/url`, {
        params: {
          url: url
        }
      });
      setArticle(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

//add article

  async function addArticle(url){
    try {
        await axios.post(`http://localhost:4000/add`, {
            url: url
        });
        
        const response = await axios.get(`http://localhost:4000/articles`);
        setArticles(response.data);
        setAddPopup(false); // Close the popup after successful addition
    } catch (error) {
        console.error('Error adding article:', error);
    }
  }

//handle article click

  async function handleArticleClick(article){
    const response = await axios.get(`http://localhost:4000/article`, {
      params: {
        id: article.id
      }
    });
    setArticle(response.data);
  }
  const [addPopup, setAddPopup] = useState(false);
  const [showLeftBar, setShowLeftBar] = useState(false);
  const [home, setHome] = useState(true);



//Delete article

  async function deleteArticle(id){
    console.log("Attempting to delete article with ID:", id); // Debug log
    try {
        const response = await axios.delete(`http://localhost:4000/delete`, {
            params: {
                id: id
            }
        });
        console.log("Delete response:", response); // Debug log
        const response2 = await axios.get(`http://localhost:4000/articles`);
        setArticles(response2.data);
    } catch (error) {
        console.error('Error deleting article:', error);
    }
  }

//toggle left bar
  const toggleLeftBar = () => {
    setShowLeftBar(!showLeftBar);
  }

//show add popup
  const showAddPopup = () => {
    setAddPopup(true);
  }
//set home to false when article is clicked
  useEffect(() => {
    if (article) {
      setHome(false);
    }
  }, [article]);

//render article or home
  if (home === false) {
    return (
      <>
        <Article 
          backToHome={() => setHome(true)}
          title={article.title} 
          content={article.content} 
        />
      </>
    )
  }else{
    return (

      <div className={styles.mainContainer}>
        {addPopup && <Add className={styles.addPopup} onClose={() => setAddPopup(false)} addArticle={addArticle} />}
              <div className={`${styles.container} ${!showLeftBar ? styles.fullWidth : ''}`}>
          <div className={styles.leftBarButton}>
            <LeftBarButton toggleLeftBar={toggleLeftBar}  />
          </div>  
          {showLeftBar && (
            <div className={styles.leftBar}>
              <LeftBar showAddPopup={showAddPopup} />
            </div>
          )}
          
          <div className={`${styles.home} ${!showLeftBar ? styles.homeFullWidth : ''}`}>
            <Home
              articles={articles}
              onArticleClick={handleArticleClick}
              deleteArticle={deleteArticle}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
