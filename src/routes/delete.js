const Joi = require('joi');
const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/delete',
  config: {
    validate: {
      payload: {
        userName: Joi.string().required().error(new Error('userName missing in request')),
      },
    },
  },
  handler: (req, reply) => {
    const { userName } = req.payload;
    Models.users.destroy({
      where: { firstName: userName },
    }).then((count) => {
      if (count) {
        reply('User successfully deleted');
      } else {
        reply('User not found');
      }
    });
  },
}];
