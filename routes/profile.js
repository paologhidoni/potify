const model = require("../database/model.js");

const get = (request, response)=>{

    const sid = request.signedCookies.sid;

    let html = ''
    response.send(html)
}

module.exports = { get };