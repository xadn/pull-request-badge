#!/usr/bin/env babel-node

import http from 'http';
import React from 'react';
import Badge from './components/Badge';

function addXmlns(svg) {
  return svg.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
}

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'image/svg+xml;charset=utf-8'});

  response.end(addXmlns(React.renderToStaticMarkup(
    <Badge />
  )));
}).listen(8080);

console.log('listening on http://localhost:8080');

