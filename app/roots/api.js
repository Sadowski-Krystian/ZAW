const http = require('express');
const rt = http();


const main = require('../services/main.js')
const selftest = require('../services/selftest.js')
rt.get('/', main);
rt.get('/selftest', selftest);
module.exports = rt;

const tplTest = require('../services/tplTest.js')
rt.get('/tpl-Test', tplTest)