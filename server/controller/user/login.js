const { users } = require('../../models');
const crypto = require('crypto');
module.exports = {
  post: (req, res) => {
    let { email, password } = req.body;
    var sess = req.session;
    var shasum = crypto
            .createHash('sha1')
            .update(password)
            .digest('hex');

          password = shasum;

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
          userInfo:{
            username: data.username,
            email: data.email,
            id: data.id
          }
        });
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
};
