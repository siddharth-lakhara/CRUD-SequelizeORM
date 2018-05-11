// const users = require('./users');
const ping = require('./ping');
const create = require('./create');
const read = require('./read');

module.exports = [].concat(ping, create, read);
