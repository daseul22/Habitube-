const { users } = require('../../models');
//const crypto = require('crypto');
module.exports = {
  post: (req, res) => {
    let { email, password } = req.body;
    var sess = req.session;

    users
    .findOne({
      where: {
        email: email,
        password: password,
      },
    })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "ID and password do not match"
        });
      } else {
        sess.userid = data.id;
        res.status(200).json({
          id: data.id,
        });
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
};
