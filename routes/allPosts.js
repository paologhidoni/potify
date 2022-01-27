const model = require("../database/model.js");

const get = (request, response) => {
  const sid = request.signedCookies.sid;

  model
    .getAllposts()
    .then((result) => {
      const posts = result.map((post) => {
        return `<li><h2 class="post__user">${post.username}</h2>
        <img src="${post.imgSrc}" class="post__image">    
        <p class="post__message">${post.post}</p></li>`;
      });

      return `<h1>Potify posts</h1><ul>${posts}</ul>`;
    })
    .then((result) => {
      response.send(result);
    })
    .catch(() => {
      response.send("server error");
    });
};

module.exports = { get };
