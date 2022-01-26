const model = require("../database/model.js");

const get = (request, response) => {

  let html = `
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Potify</title>
  </head>
  <body>
  
    <h1>Potify!</h1>
  
    <div class="wrapper">
  
      <!-- sign up and sign in links section -->
      <section class="links">
  
        <a href="/sign-up" class="btn">Sign Up</a>
        <a href="/sign-in" class="btn">Sign In</a>
  
      </section>
  
  
      <!-- Posts section -->
      <ul class="posts">
  
        <li class="post">
         
          <h2 class="post__user">User</h2>
          <div class="post__image"></div>      
          <p class="post__message"></p>
          
        </li>
  
      </ul>
  
    </div>
    
  </body>
  </html>

  `
  response.send(html);
}


module.exports = { get };