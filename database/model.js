const db = require("./connection.js");

// SIGNING UP ///////////////////////////////////////////////


// Inserts user inside users table and returns an object with the same data we just inserted (username, email, haskedPassword)
const createModelUser = (username, email, hashedPassword) => {
  const create_user =
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING username, email, password";

  return db
    .query(create_user, [username, email, hashedPassword])
    .then((result) => {
      return result.rows[0];
    });
};



// Receives a sid and a user object, inserts a new session inside the sessions table with 2 columns: sid and the user data, then returns the value associated to the sid key (in the result.rows[0] object)
const createSession = (sid, user) => {
  const create_session =
    "INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid";
  return db
    .query(create_session, [sid, user])
    .then((result) => {
      // console.log(result.rows);
      return result.rows[0].sid
      
    }); // returns sid value
};






// SIGNING IN ///////////////////////////////////////////////

// Looks up the user in the users table by matching the password entered by the user and the one stored, then returns a user object containing id, email, password, username
function getUser(email) {
  const SELECT_USER = `
      SELECT id, email, password, username FROM users WHERE email=$1
    `;
  return db.query(SELECT_USER, [email]).then((result) => {

    console.log(result.rows[0]);
    return result.rows[0];
  
  });
}




// SIGNING OUT ///////////////////////////////////////////////


// Delete the session with the specified sid from the sessions table
function deleteCurrSession(sid) {
  const DELETE_SESSION = "DELETE FROM sessions WHERE sid=$1";
  return db.query(DELETE_SESSION, [sid]);
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
  const SELECT_USER_POSTS = `SELECT users.username, posts.post, posts.imgSrc FROM users INNER JOIN posts ON users.email = posts.userEmail;`;

  return db.query(SELECT_USER_POSTS).then((result) => {
    const userPosts = result.rows;
    return userPosts;
  });
};



// CREATING POSTS ///////////////////////////////////////////////

const createPost = (username, comment, url, email) => {
  const INSERT_POST = `INSERT INTO posts (username, post, imgSrc, userEmail) VALUES($1, $2, $3, $4);`;

  console.log(username, comment, url, email);

  return db.query(INSERT_POST, [username, comment, url, email]);
};



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

module.exports = {
  createModelUser,
  createSession,
  getUser,
  getUserPosts,
  getAllposts,
  deleteCurrSession,
  getSession,
  createPost,
};
