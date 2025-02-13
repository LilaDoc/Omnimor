-- We don't need to CREATE DATABASE keepUp because it's created automatically
-- from the POSTGRES_DB environment variable

-- Explicitly connect to the keepUp database
\c keepUp;

-- Create the articles table
CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    link VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
);


