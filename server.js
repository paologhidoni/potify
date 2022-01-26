// require express and create server
const express = require("express");
const server = express();

// bodyParser
server.use(express.urlencoded({ extended: false }));

// require cookie parser & pass cookie secret
const cookieParser = require("cookie-parser");
// COOKIE_SECRET is used to sign cookies so we can trust them
server.use(cookieParser(process.env.COOKIE_SECRET));

// static files set to public folder
server.use(express.static("./public"));



// ROUTES















// Port configuration
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
