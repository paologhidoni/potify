const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};


// 02 step -create user
const createAuthUser = (username, email, password) => {

  return bcrypt.hash(password, 10)
  .then((hashedPassword) => model.createModelUser(username, email, hashedPassword));

};



// // PART TWO: SIGNING UP - STEP 1
// function createUser(email, password, name) {
//   return bcrypt.hash(password, 10) // encrypts password
//   .then((hash) => {
//     return model.createUser(email, hash, name); // inserts a user in users table with email, encrypted password and name, then returns the user object
//   });
// }



// // PART TWO: SIGNING UP -STEP 2
// function saveUserSession(user) {
//   const sid = crypto.randomBytes(18).toString("base64");
//   return model.createSession(sid, { user });
// }





// // PART THREE - logging in

// function verifyUser(email, password) {
//   return model.getUser(email)
//   .then((user) => {
//     return bcrypt.compare(password, user.password)
//     .then((match) => {
//       if(!match) {
//         throw new Error("user not found");
//       } else {
//         return user;
//       }
//     })
//   })
// }

module.exports = { COOKIE_OPTIONS, createAuthUser };
