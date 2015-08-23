import fs from 'fs';
import _ from 'lodash';

function getTemplate() {
  return _.template(
    fs.readFileSync(__dirname + '/../badge/ready.svg', 'utf-8')
      .replace(/ready to merge/g, '<%= status %>')
      .replace(/#6CC644/g, '<%= color %>')
      .replace(/#97/g, '#<%= pullID %>')
  );
}

const config = {
  ready: {
    status: 'ready to merge',
    color: '#6CC644',
  },
  pending: {
    status: 'pending',
    color: '#CEA61B',
  },
  failure: {
    status: 'failure',
    color: '#BD2C00',
  },
  reverted: {
    status: 'reverted',
    color: '#BD2C00',
  },
  merged: {
    status: 'merged',
    color: '#6E5494',
  },
};

const Badge = {
  create(pullRequest) {
    return getTemplate()(_.extend({pullID: pullRequest.id}, config[pullRequest.status]));
  }
};

export default Badge;
