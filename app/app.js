console.log("App Init");
const http = require('express');
const hbs = require('hbs');
const conf = require('./etc/conf.js')

// Server
const app = http();
app.set('view engine', 'hbs');
// Router
const router = require('./roots/api.js')
app.use('/',router);

console.log("http://localhost:1313");
app.listen(conf.port);