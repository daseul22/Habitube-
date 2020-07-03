const { todobox } = require('../../models');

module.exports = {
  post: (req, res) => {
    let { id } = req.body;
    todobox
      .findAll({
        where: { usersId: id },
        attributes: [
          'memoTitle',
          'memoContent',
          'youtubeInfo',
          'isComplete',
          'date',
        ],
      })
      .then((todoboxes) => {
        res.status(200).send(todoboxes);
      })
      .catch((err) => {
        res.status(404).send({
          message: null,
        });
      });
  },
};
