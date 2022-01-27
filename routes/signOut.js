const { deleteCurrSession } = require("../database/model");

function post(request, response) {
  const sid = request.signedCookies.sid;
  deleteCurrSession(sid).then(() => {
    response.clearCookie("sid");
    response.redirect("/");
  });
}

module.exports = { post };
