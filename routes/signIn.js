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
  <title>Potify - Sign In</title>
</head>
<body>
  <h1>Sign in</h1>
  <div class="wrapper">

    <section class="links">

      <a href="/" class="btn">Back to Home</a>

    </section>

    <form action="/sign-in" method="POST">

      <label for="signIn_Email">Email</label>
      <input type="email" name="email" id="signIn_Email">

      <label for="signIn_Password">Password</label>
      <input type="password" name="password" id="signIn_Password"> 

      <button type="submit">Sign In</button>

    </form>


  </div>
  
</body>
</html>

  `;
  response.send(html);
};

const post = (request, response) => {
  const { email, password } = request.body;

  auth
    .verifyUser(email, password) // returns the user
    .then((user) => auth.saveUserSession(user)) // returns sid value
    .then((sidValue) => {
      response.cookie("sid", sidValue, auth.COOKIE_OPTIONS);
      response.redirect("/profile");
    });
};

module.exports = { get, post };
