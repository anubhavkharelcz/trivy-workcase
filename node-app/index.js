const _ = require('lodash');

console.log('Vulnerable lodash version in use.');

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false }
];

console.log(_.find(users, { active: false }));
