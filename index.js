'use strict';
const http           = require('http');
const express        = require('express');
const indexHandler   = require('./handlers/indexHandler');
const pullSvgHandler = require('./handlers/pullSvgHandler');
const app            = express();
const PORT           = process.env.PORT || 8080;

app.get('/', indexHandler);
app.get('/gh/:owner/:repo/pull/:pull.svg', pullSvgHandler);

http.createServer(app).listen(PORT);
console.log(`listening on http://localhost:${PORT}`);

