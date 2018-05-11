const Models = require('../models');

module.exports = [{
  method: 'POST',
  path: '/update',
  handler: (req, reply) => {
    const { oldName, newName } = req.payload;
    Models.users.update(
      { firstName: newName },
      { where: { firstName: oldName } },
    ).then(() => {
      reply('User succesfully updated');
    });
  },
}];
