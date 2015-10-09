'use strict';
const ghGet         = require('../lib/ghGet');
const Badge         = require('../lib/Badge');
const PullDecorator = require('../lib/PullDecorator');

function fetchPull(owner, repo, pullID, callback) {
  const pullURL = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullID}`;

  console.time(pullURL);
  ghGet(pullURL, (pullError, pullData) => {

    console.timeEnd(pullURL);
    if (pullError) console.error('ghGet pullURL failed');

    const statusesURL = pullData.statuses_url;
    console.time(statusesURL);
    ghGet(statusesURL, (statusesError, statusesData) => {

      console.timeEnd(statusesURL);
      if (statusesError) console.error('ghGet statusesURL failed');

      const pull = new PullDecorator(pullData, statusesData);
      callback(statusesError, pull);
    });
  });
}

function pullSvgHandler(req, res) {
  const params = req.params;

  res.writeHead(200, {'Content-Type': 'image/svg+xml;charset=utf-8'});

  fetchPull(params.owner, params.repo, params.pull, (error, pull) => {
    if (error) {
      res.end(Badge(pull));
    } else {
      res.end(Badge(pull));
    }
  });
}

module.exports = pullSvgHandler;