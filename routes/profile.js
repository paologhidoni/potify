const model = require("../database/model.js");

const get = (request, response) => {
  const sid = request.signedCookies.sid;
  let html = `<h1>Your Profile</h1><form action="/sign-out" method="POST">
  <button>Sign out</button>
</form>`;
  response.send(html);
};

module.exports = { get };
