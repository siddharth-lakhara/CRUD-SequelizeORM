const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/users',
  handler: (req, reply) => {
    Models.users.findAll({
      where: {},
      attributes: [['firstName', 'userName']],
    }).then((searchResults) => {
      reply(searchResults);
    });
  },
}];
