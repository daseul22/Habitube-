const { todobox } = require('../../models');
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
function genDate(start) {
  let date = new Date();
  let getDate = date.getDate();
  date.setDate(getDate + start);
  let year = date.getFullYear();
  let month = date.getMonth();
  getDate = date.getDate();
  return new Date([year, month, getDate]);
}
function calendar(start, weekly, end) {
  //[{date : '2020-07-01 수'}]
  //weekly [2,4] = 화, 목
  let result = [];
  let getDate = new Date().getDate();
  //------------code---------------
  // let startDate = new Date();
  // startDate.setDate(getDate + start);
  // let endDate = new Date();
  // endDate.setDate(getDate + start + end);
  for (let i = 0; i <= end; i++) {
    let forDate = genDate(start);
    forDate.setDate(getDate + start + i);
    forDay = forDate.getDay();
    if (weekly.includes(forDay)) {
      result.push({
        date: dateFormat(
          forDate.getFullYear(),
          forDate.getMonth() + 1,
          forDate.getDate(),
          forDay,
        ),
      });
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

    let calendarArr = calendar(startDate, weekly, deadLine);
    for (let i = 0; i < calendarArr.length; i++) {
      calendarArr[i].usersId = id;
    }
    todobox.bulkCreate(calendarArr).catch((err) => {
      res.status(404).send({
        message: 'goal error',
      });
    });
    for (let i = 0; i < calendarArr.length; i++) {
      delete calendarArr[i].usersId;
    }
    res.status(200).send(calendarArr);
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
