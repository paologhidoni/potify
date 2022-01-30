const { deleteCurrSession } = require("../database/model");


// get the current sid value from the request.signedCookies object
// Delete the session with that sid from the sessions table
// Delete the cookie from the browser
function post(request, response) {
  // console.log(request.signedCookies);
  const sid = request.signedCookies.sid;
  deleteCurrSession(sid).then(() => {
    response.clearCookie("sid");
    response.redirect("/");
  });
}

module.exports = { post };
