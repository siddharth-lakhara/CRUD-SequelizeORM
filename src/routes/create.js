const Models = require('../../models');
const Joi = require('joi');

// Create new user
module.exports = [{
  method: 'POST',
  path: '/users',
  config: {
    validate: {
      payload: {
        userName: Joi.string().required().error(new Error('userName field not found')),
      },
    },
  },
  handler: (req, reply) => {
    const { userName } = req.payload;
    Models.users.findOrCreate({ where: { firstName: userName } })
      .spread((_, created) => {
        if (created) {
          reply('User successfully created');
        } else { reply('User already exists'); }
      }).catch(() => {
        reply('User successfully created');
      });
  },
}];
