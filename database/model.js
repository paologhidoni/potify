const db = require("./connection.js");

// SIGNING UP ///////////////////////////////////////////////

const createModelUser = (username, email, hashedPassword) => {
  const create_user =
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING username, email, password";

  return db
    .query(create_user, [username, email, hashedPassword])
    .then((result) => {
      return result.rows[0];
    });
};

const createSession = (sid, data) => {
  const create_session =
    "INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid";
  return db
    .query(create_session, [sid, data])
    .then((result) => result.rows[0].sid); // returns sid value
};

// SIGNING IN ///////////////////////////////////////////////

// returns id, email, password, username
function getUser(email) {
  const SELECT_USER = `
      SELECT id, email, password, username FROM users WHERE email=$1
    `;
  return db.query(SELECT_USER, [email]).then((result) => result.rows[0]);
}

// GETTING POSTS ///////////////////////////////////////////////


// Collecting all posts

function getAllposts() {
  const SELECT_POSTS = `SELECT username, post, imgSrc FROM posts;`;
  return db.query(SELECT_POSTS).then((result) => {
    const posts = result.rows;
    return posts;
  });
}

// Collecting user posts

const getUserPosts = () => {
  const SELECT_USER_POSTS = `SELECT users.username, posts.post, posts.imgSrc FROM users INNER JOIN posts ON users.email = posts.user_email;`

  return db.query(SELECT_USER_POSTS).then((result) => {
    const userPosts = result.rows;
    return userPosts;
  });
}


// CREATING POSTS ///////////////////////////////////////////////



const createPost = (username, comment, url, email) => {
  const INSERT_POST = `INSERT INTO posts (username, post, imgSrc, user_email) VALUES($1, $2, $3, $4);`;

  console.log(username, comment, url, email);

  return db.query(INSERT_POST, [username, comment, url, email]);
}




// GET SESSION DATA

function getSession(sid) {
  const SELECT_SESSION = "SELECT data FROM sessions WHERE sid=$1";
  return db.query(SELECT_SESSION, [sid]).then((result) => {
    const singleResult = result.rows[0];
    return singleResult && singleResult.data;
  });
}

//returns
// {
//   username: 'PrincessPeach',
//   post: 'What a beautiful day',
//   imgsrc: 'url'
// },
// { username: 'Yoshi', post: 'Egg', imgsrc: 'url' }
// ]

module.exports = { createModelUser, createSession, getUser, getAllposts, getUserPosts, createPost, getSession };
