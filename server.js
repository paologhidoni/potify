// require express and create server
const express = require("express");
const server = express();

// require crypto package
const crypto = require("crypto");

// require handlers
const home = require("./routes/home.js");
const signUp = require("./routes/signUp.js");
const signIn = require("./routes/signIn.js");
const signOut = require("./routes/signOut.js");
const allPosts = require("./routes/allPosts.js");
const profile = require("./routes/profile.js");

// bodyParser
server.use(express.urlencoded({ extended: false }));

// require cookie parser & pass cookie secret
const cookieParser = require("cookie-parser");
// COOKIE_SECRET is used to sign cookies so we can trust them
server.use(cookieParser(process.env.COOKIE_SECRET));

// static files set to public folder
server.use(express.static("./public"));



// ROUTES

// home
server.get("/", home.get);

// sign-up
server.get("/sign-up", signUp.get);
server.post("/sign-up", signUp.post);

// sign-in
server.get("/sign-in", signIn.get);
server.post("/sign-in", signIn.post);

// sign-out
server.post("/sign-out", signOut.post);

// profile
server.get("/profile", profile.get);

// display all posts
server.get("/allposts", allPosts.get);


// add-post
server.get("/profile", profile.get);
server.post("/add-post", profile.post);

// delete-post

// Port configuration
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// console.log(crypto.randomBytes(32).toString('hex')) // random string