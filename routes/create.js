const Models = require('../models');

// Create new user
module.exports = [{
  method: 'POST',
  path: '/users',
  handler: (req, reply) => {
    const { userName } = req.payload;
    Models.users.create({ firstName: userName })
      .then(() => {
        reply('User successfully created');
      });
  },
}];
