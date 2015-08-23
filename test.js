#!/usr/bin/env babel-node

import http from 'http';
import fs from 'fs';
import Badge from './lib/Badge';

// const badge = createBadge(
//   'pivotaltracker',
//   'tracker-frontend',
//   97,
//   [
//     {
//       state: 'success',
//       description: 'Your tests passed on CircleCI!',
//       context: 'ci/circleci'
//     },
//     {
//       state: 'success',
//       description: 'Code Climate didn\'t find any new or fixed issues.',
//       context: 'codeclimate'
//     }
//   ]
// );

// failure
// #bd2c00
// reverted
// #bd2c00
// pending
// #cea61b

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'image/svg+xml;charset=utf-8'});
  res.end(Badge.create({status: 'pending', id: 1}));
  // res.end(Badge.create({status: 'ready', id: 1}));
}).listen(8080);

console.log('listening on http://localhost:8080');
