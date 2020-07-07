const { todobox } = require('../../models');

function dateFormat() {
  //['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();
  let day = new Date().getDay();
  let dayTable = ['일', '월', '화', '수', '목', '금', '토', '일'];
  month = '0' + month;
  date = '0' + date;
  let dateString = `${year}-${month.slice(-2)}-${date.slice(-2)} ${
    dayTable[day]
  }`;
  return dateString;
  // '2020-07-01 수'
}

module.exports = {
  post: (req, res) => {
    let { id, selectedVideo, memoTitle, memoContent } = req.body;
    todobox
      .update(
        {
          youtubeInfo: selectedVideo,
          memoTitle: memoTitle,
          memoContent: memoContent,
        },
        {
          where: {
            usersId: id,
            date: dateFormat(),
          },
        },
      )
      .catch((err) => {
        res.status(404).send({
          message: 'There is no video information.',
        });
      });
    res.status(200).send({
      message: 'Success',
    });
  },
};
