
const http = require('express');
const conf = require('./etc/conf.js')

const zmienna = require('hbs')

// Server
const app = http();
app.set('view engine', 'hbs')
// Router
const router = require('./roots/api.js')
app.use('/',router);

console.log("http://localhost:1313");
app.listen(conf.port);