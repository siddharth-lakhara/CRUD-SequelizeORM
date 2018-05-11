const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/delete',
  handler: (req, reply) => {
    const { userName } = req.payload;
    Models.users.destroy({
      where: { firstName: userName },
    }).then(() => {
      reply('User successfully deleted');
    });
  },
}];
