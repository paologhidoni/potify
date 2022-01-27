// const model = require("../database/model.js");

// const get = (request, response) => {
//   const sid = request.signedCookies.sid;

//   model
//     .getUserPosts()
//     .then((result) => {
//       const userPosts = result.map((post) => {
//         return `
//         <li>
//           <h2 class="post__user">${userPosts.username}</h2>
//           <img src="${userPosts.imgSrc}" class="post__image">    
//           <p class="post__message">${userPosts.post}</p>
//         </li>`;
//       });

//       return `
      
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="styles.css">
//         <title>Potify - Add Post</title>
//       </head>
//       <body>

//         <div class="wrapper">

//           <section class="links">

//             <a href="/" class="btn">Back to Home</a>

//           </section>

//           <form action="/add-post" method="POST">

//             <label for="username">Username</label>
//             <input type="text" aria-label="Enter your username" name="username" id="username" required>

//             <label for="comment">Comment</label>
//             <textarea name="comment" aria-label="Enter your comment" id="comment" cols="30" rows="5" required></textarea>

//             <label for="url">Image URL</label>
//             <input type="text" aria-label="Enter a url to display an image of your plant" name="url" id="url" required> 

//             <button type="submit" aria-label="click this button to send your post">Post your Plant</button>

//           </form>

//           <ul class="user-posts">${userPosts}</ul>

//         </div>
        
//       </body>
//       </html>

//       `;
//     })
//     .then((result) => {
//       response.send(result);
//     })
//     .catch(() => {
//       response.send("server error");
//     });
// };




// function sanitise(...inputArr) {
//   return inputArr.map((inputStr) => {
//     return inputStr.replace(/</g, "&lt;");
//   });
// }


// const post = (request, response) => {

//   let sanitisedInputs = sanitise(request.body.username, request.body.comment, request.body.url);

//   const [username, comment, url] = sanitisedInputs;

//   createPost(username, comment, url)
//   .then(() => {
//     response.send("/allPosts");
//   })

// }





// module.exports = { get, post }