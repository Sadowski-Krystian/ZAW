const conf = require('../etc/conf.js')
const selftest = function(req , resp){
    resp.send("App Self Test");
    console.log("self-test");
    console.log("port "+conf.port);
    console.log("name "+conf.name);
}
module.exports = selftest;