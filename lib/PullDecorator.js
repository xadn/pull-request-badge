'use strict';

class PullDecorator {
  constructor(pullData, statusesData) {
    this.data = pullData;
    this.statuses = statusesData;
  }

  color() {
    switch (this.status()) {
      case 'ready':     return '#6CC644';
      case 'pending':   return '#CEA61B';
      case 'failure':   return '#BD2C00';
      case 'reverted':  return '#BD2C00';
      case 'merged':    return '#6E5494';
      default:          return '#000';
    }
  }

  message() {
    switch (this.status()) {
      case 'ready':     return 'ready to merge';
      case 'pending':   return 'pending';
      case 'failure':   return 'failure';
      case 'reverted':  return 'reverted';
      case 'merged':    return 'merged';
      default:          return 'error';
    }
  }

  number() {
    return this.data.number;
  }

  status() {
    // ready
    // pending
    // failure
    // reverted
    // reverted
    // merged
    return 'ready';
  }
}

module.exports = PullDecorator;

// pull
// ----
// "number": 145,
// "state": "open",
// "locked": false,
// "merged": false,
// "mergeable": false,
// "mergeable_state": "dirty",

// statuses
// --------
// "state": "success",
// "description": "Your tests passed on CircleCI!",
// "context": "ci/circleci",


