const model = require("../database/model.js");

const get = (request, response) => {
  // const sid = request.signedCookies.sid;

  model
    .getAllposts()
    .then((result) => {
      const posts = result
        .map((post) => {
          return `<li><h2 class="post__user">${post.username}</h2>
        <section class="container">
        <img src="${post.imgsrc}">
        </section>
        <p class="post__message">${post.post}</p></li>`;
        })
        .reverse()
        .join("");

      return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=
          , initial-scale=1.0">
          <title>Document</title>
      </head>
      <link rel="stylesheet" href="allPosts.css">
      <body>
          <section id="header">
      
        
          <a href="/profile"><button>Go back to your profile</button></a>
      
          <h1>Potify posts</h1>
      
          <form action="/sign-out" method="POST">
          <button type="submit">Sign out</button>
          </form>
         
          </section>
      
          <section class='all_posts'>
              <ul>${posts}</ul>
          </section>
      
          <footer>
          <img class="logo" src="/potify.png">
          </footer>
      </body>
      </html>`;
    })
    .then((result) => {
      response.send(result);
    })
    .catch(() => {
      response.send("server error");
    });
};

module.exports = { get };
