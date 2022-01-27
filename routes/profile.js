const model = require("../database/model.js");

const get = (request, response) => {
  const sid = request.signedCookies.sid;
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=
      , initial-scale=1.0">
      <title>Document</title>
  </head>
  <link rel="stylesheet" href="./public/profile.css">
  <body>
      <section id="header">
  
      <form action="/allposts" method="POST">
      <button>Look at all posts</button>
      </form>
  
      <h1>Your Profile</h1>
  
      <form action="/sign-out" method="POST">
      <button>Sign out</button>
      </form>
  
      </section>
      <section class='user_posts'></section>
  </body>
  </html>`;
  response.send(html);
};

module.exports = { get };
