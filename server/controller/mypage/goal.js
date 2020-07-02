const { todoboxes } = require('../../models');
const { users } = require('../../models');
function algorithm() {}
module.exports = {
  post: (req, res) => {
    let { startDate, id, weekly, keyword, deadLine } = req.body;
    users
      .update(
        {
          keyword: keyword,
        },
        {
          where: {
            id: id,
          },
        },
      )
      .catch((err) => {
        res.status(404).send("Dont't find userID");
      });

    let arr = algorithm(stratDate, weekly, deadLine);
    res.send(arr);
  },
};
