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

// Hash the password provided by the user, then call createModelUser to insert user in the users table and return their data as an object.
const createAuthUser = (username, email, password) => {

  return bcrypt.hash(password, 10)
  .then((hashedPassword) => model.createModelUser(username, email, hashedPassword));

};




// SIGNING UP AND SIGNING IN

// Receives a user object, generates a sid and creates and stores a new session
const saveUserSession = (user) => { 

  const sid = crypto.randomBytes(18).toString("base64");

  return model.createSession(sid, { user }); // returns sid value

}



// SIGNING IN ///////////////////////////////////////////////

function verifyUser(email, password) {

  return model
    .getUser(email) // returns a user object containing id, email, password, username
    .then((user) => { // the user object
      return bcrypt
        .compare(password, user.password) // encryots the entered password and compares to the stored hashedPassword (user.password). returns true or false
        .then((match) => {
          if(!match) {
            throw new Error("user not found");
          } else {
            return user; // if the user is found, returns the user object
          }
        })
    })
}

module.exports = { COOKIE_OPTIONS, createAuthUser, saveUserSession, verifyUser };