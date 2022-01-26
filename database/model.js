const db = require("./connection.js");

//step 1-create user
const createUser = (user,email,password)=>{
    
}


const createSession = (sid,data)=>{
    const create_session = 'INSERT INTO sessions (sid,data) VALUES ($1,$2) RETURNING sid';
    return db.query(create_session,[sid,data])
    .then(result => result.rows[0].sid);
}

module.exports = {createSession}