// require express and create server
const express = require("express");
const server = express();

// require handlers
const home = require("./routes/home.js");
const signUp = require("./routes/signUp.js");
const signIn = require("./routes/signIn.js");

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
// server.post("/sign-up", signUp.post);

// sign-in
// server.get("/sign-in", signIn.get);
// server.post("/sign-in", signIn.post);

// log-out



// create-post

// delete-post












// Port configuration
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
