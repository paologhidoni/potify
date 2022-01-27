const model = require("../database/model.js");



function get(request, response) {
  const sid = request.signedCookies.sid;
  if (sid) {
    model.getSession(sid).then((session) => {
      response.send(`
        <h1>Hello ${session.user.email}</h1>
        <form action="/sign-out" method="POST">
          <button>Log out</button>
        </form>

        <form action="/add-post" method="POST">

            <label for="comment">Comment</label>
            <textarea name="comment" aria-label="Enter your comment" id="comment" cols="30" rows="5" required></textarea>

            <label for="url">Image URL</label>
            <input type="text" aria-label="Enter a url to display an image of your plant" name="url" id="url" required> 

            <button type="submit" aria-label="click this button to send your post">Post your Plant</button>

          </form>

      `);
    });
  } else {
    response.send(`
    <h1>Hello anonymous</h1>
    <a href="/sign-up">Sign up</a>
    <span> | </span>
    <a href="/log-in">Log in</a>
  `);
  }
}




// const get = (request, response) => {

//   model
//     .getUserPosts()
//     .then((result) => {
//       const userPosts = result.map((post) => {
//         return `
//         <li>
//           <h2 class="post__user">${post.username}</h2>
//           <img src="${post.imgSrc}" class="post__image">    
//           <p class="post__message">${post.post}</p>
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
//     .catch((error) => {
//       console.log(error);
//       response.send("server error");
//     });

// };



// function to sanitise the user inputs
function sanitise(...inputArr) {
  return inputArr.map((inputStr) => {
    return inputStr.replace(/</g, "&lt;");
  });
}


const post = (request, response) => {

  const sid = request.signedCookies.sid;

  model.getSession(sid)
  .then((result) => {
    console.log(result);

    let sanitisedInputs = sanitise(request.body.comment, request.body.url);

    const [comment, url] = sanitisedInputs;
    // console.log(result.user);
    model.createPost(result.user.username, comment, url, result.user.email)
    .then(() => {
      response.redirect("/allPosts");
    })  
  })
  .catch((error) => {
    console.log(error)
    response.send("<h1>Error!</h1>")
  })

}





module.exports = { get, post }