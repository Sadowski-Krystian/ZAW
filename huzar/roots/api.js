const http = require('express');
const rt = http();


const main = require('../services/main.js')
rt.get('/', main)

const cos = require('../services/cos.js')
rt.get('/cos', cos)
const plik = require('../services/plik.js')
rt.get('/plik', plik)

module.exports = rt;

