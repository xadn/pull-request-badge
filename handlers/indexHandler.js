'use strict';

function indexHandler(req, res) {
  res.send('send a request like:\nhttp://localhost:8080/gh/pivotaltracker/tracker-frontend/pull/145');
}

module.exports = indexHandler;