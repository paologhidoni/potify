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

// Collecting all posts

function getAllposts() {
  const SELECT_POSTS = `SELECT username, post, imgSrc FROM posts;`;
  return db.query(SELECT_POSTS).then((result) => {
    const posts = result.rows;
    return posts;
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

module.exports = { createModelUser, createSession, getUser, getAllposts };
