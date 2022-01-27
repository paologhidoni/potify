BEGIN;

DROP TABLE IF EXISTS users, sessions, posts CASCADE;

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
  userEmail TEXT UNIQUE NOT NULL REFERENCES users(email)
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

INSERT INTO posts (id, username, post, imgSrc, userEmail) VALUES (
  1,
  'Mario',
  'What a beautiful day',
  'https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/big-leaf-monstera/133375/swiss-cheese-plant-big-leaf-in-grey-lisbon-plant-pot_c6832acb27c72430f782d679cd672ef1.webp',
  'mario@gmail.com'
);

-- INSERT INTO posts (id, username, post, imgSrc, useremail) VALUES (
--   2,
--   'Mario',
--   'Egg',
--   'https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FjdHVzJTIwcGxhbnR8ZW58MHx8MHx8&w=1000&q=80',
--   "mario@gmail.com"
-- );


COMMIT;