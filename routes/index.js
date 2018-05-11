// const users = require('./users');
const ping = require('./ping');
const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');

module.exports = [].concat(
  ping, create,
  read, update,
  del,
);
