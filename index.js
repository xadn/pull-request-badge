'use strict';
const http           = require('http');
const express        = require('express');
const indexHandler   = require('./handlers/indexHandler');
const pullSvgHandler = require('./handlers/pullSvgHandler');
const app            = express();

app.get('/', indexHandler);
app.get('/gh/:owner/:repo/pull/:pull.svg', pullSvgHandler);

http.createServer(app).listen(8080);
console.log('listening on http://localhost:8080');

