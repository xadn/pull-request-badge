#!/usr/bin/env babel-node

import http from 'http';
import fetch from 'node-fetch';
import React from 'react';
import btoa from 'btoa';
import Badge from './components/Badge';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/gh/:username/:token/:owner/:repo/pulls/:pull.svg', (request, response) => {
  const { username, token, owner, repo, pull, } = request.params;
  const ghFetch = createGithubFetch(username, token);

  ghFetch(pullRequestURL(owner, repo, pull))
  .then(res => res.json())
  .then(json => ghFetch(json.statuses_url))
  .then(res => res.json())
  .then(json => {
    const statuses = parseStatuses(json);
    response.writeHead(200, {'Content-Type': 'image/svg+xml;charset=utf-8'});
    response.end(renderBadge(<Badge {...{owner, repo, pull, statuses}} />));
  });
});

function createGithubFetch(username, token) {
  const options = {headers: {Authorization: `basic ${btoa(`${username}:${token}`)}`}};
  return ((url) => fetch(url, options));
}

function pullRequestURL(owner, repo, pull) {
  return `https://api.github.com/repos/${owner}/${repo}/pulls/${pull}`
}

function parseStatuses(json) {
  const contexts = {};
  return json.reduce((memo, status) => {
    if (!contexts[status.context]) {
      contexts[status.context] = true;
      memo.push({state: status.state, description: status.description, context: status.context});
    }
    return memo;
  }, []);
}

function addXmlns(svg) {
  return svg.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
}

function renderBadge(...args) {
  console.time('renderBadge');
  const ret = addXmlns(React.renderToStaticMarkup(...args));
  console.timeEnd('renderBadge');
  return ret;
}

http.createServer(app).listen(8080);
console.log('listening on http://localhost:8080');

