const model = require("../database/model.js");
const auth = require("../auth.js");

const get = (request, response) => {
  let html = `
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Potify - Sign Up</title>
  </head>
  <body>
    <h1>Sign up</h1>
    <div class="wrapper">
  
      <!-- sign up and sign in links section -->
      <section class="links">
  
        <a href="/" class="btn">Back to Home</a>
  
      </section>
  
      <form action="/sign-up" method="POST">
  
        <label for="signup_username">Username</label>
        <input type="text" name="username" id="signup_username">
  
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
  
        <label for="password">Password</label>
        <input type="password" name="password" id="password"> 
  
        <button type="submit">Sign Up</button>
  
      </form>
  
  
    </div>
    
  </body>
  </html>

  `;
  response.send(html);
};

const post = (request, response) => {
  const { username, email, password } = request.body;

  // console.log(username, email, password);

  auth
    .createAuthUser(username, email, password)
    .then((user) => auth.saveUserSession(user))
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/profile");
    })
    .catch((error) => {
      console.log(error);
      response.send(
        "<h1>there was an issue signing up</h1></br><a href='/'>Home</a>"
      );
    });
};

module.exports = { get, post };
