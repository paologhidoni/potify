BEGIN;

DROP TABLE IF EXISTS users, sessions, posts  CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  username TEXT NOT NULL
);

CREATE TABLE sessions (
  sid TEXT PRIMARY KEY,
  data JSON
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  username varchar(20),
  post TEXT,
  imgSrc TEXT,
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (email, password, username) VALUES (
  'mario@gmail.com',
  'password',
  'Mario'
);


INSERT INTO sessions (sid, data) VALUES (
  'gjhsas667a',
  '{"name": "Luigi", "age": 20}'
);

INSERT INTO posts (id, username, post, imgSrc, user_id) VALUES (
  1,
  'PrincessPeach',
  'What a beautiful day',
  'url',
  1
);


COMMIT;