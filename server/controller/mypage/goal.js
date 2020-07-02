const { todoboxes } = require('../../models');
const { users } = require('../../models');
function dateFormat(year, month, date, day) {
  //['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let dayTable = ['일', '월', '화', '수', '목', '금', '토', '일'];
  month = '0' + month;
  date = '0' + date;
  let dateString = `${year}-${month.slice(-2)}-${date.slice(-2)} ${
    dayTable[day]
  }`;
  return dateString;
  // '2020-07-01 수'
}
function calendar(start, weekly, end) {
  //[{date : '2020-07-01 수'}]
  //weekly [2,4] = 화, 목
  let result = [];
  let getDate = new Date().getDate();
  //------------code---------------
  let startDate = new Date();
  startDate.setDate(getDate + start);
  let startDay = startDate.getDay();
  // let endDate = new Date();
  // endDate.setDate(getDate + start + end);
  for (let i = 0; i <= end; i++) {
    startDate.setDate(getDate + start + i);
    startDay = startDate.getDay();
    if (weekly.includes(startDay)) {
      result.push(
        dateFormat(
          startDate.getFullYear(),
          startDate.getMonth() + 1,
          startDate.getDate(),
          startDay,
        ),
      );
    }
  }
  return result;
}
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

    let calendarArr = calendar(stratDate, weekly, deadLine);
    res.send(arr);
  },
};

//   let monthTable = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];
// let currentYear = new Date().getFullYear();
// let dateTable;
// if (new Date([currentYear, 2, 29]).getDate() === 29) {
//   dateTable = {
//     Jan: 31,
//     Feb: 29,
//     Mar: 31,
//     Apr: 30,
//     May: 31,
//     Jun: 30,
//     Jul: 31,
//     Aug: 31,
//     Sep: 30,
//     Oct: 31,
//     Nov: 30,
//     Dec: 31,
//   };
// } else {
//   dateTable = {
//     Jan: 31,
//     Feb: 28,
//     Mar: 31,
//     Apr: 30,
//     May: 31,
//     Jun: 30,
//     Jul: 31,
//     Aug: 31,
//     Sep: 30,
//     Oct: 31,
//     Nov: 30,
//     Dec: 31,
//   };
// }
