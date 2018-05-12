const Joi = require('joi');
const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/update',
  config: {
    validate: {
      payload: {
        oldName: Joi.string().required().error(new Error('oldName missing in request')),
        newName: Joi.string().required().error(new Error('newName missing in request')),
      },
    },
  },
  handler: (req, reply) => {
    const { oldName, newName } = req.payload;
    Models.users.update(
      { firstName: newName },
      { where: { firstName: oldName } },
    ).then((count) => {
      if (count[0]) {
        reply('User succesfully updated');
      } else {
        reply('User not found');
      }
    });
  },
}];
