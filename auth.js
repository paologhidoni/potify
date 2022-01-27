const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};


// SIGNING UP ///////////////////////////////////////////////

const createAuthUser = (username, email, password) => {

  return bcrypt.hash(password, 10)
  .then((hashedPassword) => model.createModelUser(username, email, hashedPassword));

};


// SIGNING UP AND SIGNING IN

const saveUserSession = (user) => { // the user object

  const sid = crypto.randomBytes(18).toString("base64");

  return model.createSession(sid, { user }); // returns sid value

}



// SIGNING IN ///////////////////////////////////////////////

function verifyUser(email, password) {

  return model
    .getUser(email) // returns id, email, password, username
    .then((user) => {
      return bcrypt
        .compare(password, user.password) // returns true or false
        .then((match) => {
          if(!match) {
            throw new Error("user not found");
          } else {
            return user;
          }
        })
    })
}

module.exports = { COOKIE_OPTIONS, createAuthUser, saveUserSession, verifyUser };