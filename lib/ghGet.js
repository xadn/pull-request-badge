'use strict';
const btoa        = require('btoa');
const request     = require('request');
const GH_USERNAME = process.env.GH_USERNAME;
const GH_TOKEN    = process.env.GH_TOKEN;

function ghGet(url, callback) {
  const options = {
    url: url,
    headers: {
      Authorization: `basic ${btoa(`${GH_USERNAME}:${GH_TOKEN}`)}`,
      'User-Agent': 'request'
    },
    json: true
  };
  request(options, (error, req, data) => {
    callback(error, data);
  });
}

module.exports = ghGet;
