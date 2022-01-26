const db = require("./connection.js");

// step 01 - create user
const createModelUser = (username, email, hashedPassword) => {
    const create_user = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING username, email, password";

    return db.query(create_user, [username, email, hashedPassword])
    .then(result => { 
        console.log("ROWS", result);

        return result.rows[0]

    });
}


const createSession = (sid,data)=>{
    const create_session = 'INSERT INTO sessions (sid,data) VALUES ($1,$2) RETURNING sid';
    return db.query(create_session,[sid,data])
    .then(result => result.rows[0].sid);
}

module.exports = {createModelUser, createSession}