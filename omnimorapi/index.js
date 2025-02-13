//this is the
import express from "express";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10), // Convert string to number
});

db.connect();
async function initDB() {
  try {
    await db.query("CREATE TABLE IF NOT EXISTS articles (id SERIAL PRIMARY KEY, title TEXT, link TEXT)");
    console.log("Database initialized");
  } catch (error) {
    console.error('Error:', error);
  }
} 
initDB();
// async function urlToArticle(url){
//   const article = await parseArticle(url);
//   const articleData = generateArticleData(article);
//   return articleData;
// }

async function parseArticle(articleURL) {
  try {
    const dom = await JSDOM.fromURL(articleURL);
    const doc = dom.window.document;
    const reader = new Readability(doc);
    const article = reader.parse();
    // console.log(article);
    return article;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}


function generateArticleData(article) {
  return {
    title: article.title,
    content: article.content
  };
}

app.get("/url", async (req, res) => {
  const url = req.query.url;
  try {
    const article = await parseArticle(url);
    if (!article) {
      res.status(400).json({ error: 'Could not parse article' });
      return;
    }
    res.json(generateArticleData(article));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get("/article", async (req, res) => {
  const id = req.query.id;
  try {
    const article = await db.query("SELECT link FROM articles WHERE id = $1", [id]);
    // console.log(article.rows[0]);
    res.redirect("/url?url=" + article.rows[0].link);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get("/articles", async (req, res) => {
  try {
    const articles = await db.query("SELECT * FROM articles");
    res.json(articles.rows);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post("/add", async (req, res) => {
  try {
    const url = req.body.url;
    
    if (!url) {
      return res.redirect("/articles?error=URL is required");
    }

    const article = await parseArticle(url);
    
    if (!article) {
      return res.redirect("/articles?error=Could not parse article");
    }

    const articleData = generateArticleData(article);
    
    // Check if article already exists in database
    const existingArticle = await db.query("SELECT * FROM articles WHERE link = $1", [url]);
    if (existingArticle.rows.length > 0) {
      return res.redirect("/articles?error=Article already exists");
    }

    await db.query("INSERT INTO articles (title, link) VALUES ($1, $2)", [articleData.title, url]);
    return res.redirect("/articles?success=Article added successfully");
    
  } catch (error) {
    console.error('Error:', error);
    return res.redirect("/articles?error=Server error occurred");
  }
});

app.delete("/delete", async (req, res) => {
  try { 
    const id = req.query.id;
    // console.log("Received delete request for ID:", id); // Debug log
    const result = await db.query("DELETE FROM articles WHERE id = $1", [id]);
    // console.log("Delete result:", result); // Debug log
    res.json({ message: "Article deleted" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port ${process.env.API_PORT}`);
});

