import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoBox from './TodoBox';

import { Badge, Row } from 'reactstrap';
import '../etc/App.css';
let arr = [1, 2, 3, 4];

// 처음 가입후 정보입력 => 달력: calendar
// 정보 불러오기 => 달력 + todobox 정보: boxes
class TodoBoxContainer extends Component {
  state = {
    showListComponent: false,
    list: [],
  };
  componentDidMount() {}

  render() {
    const { boxes, userinfo } = this.props;
    const { list } = this.state;
    return (
      // 날 => 월로 환산하는데, 이번달 다음달을 어떻게 구분하지?
      // 무한 스크롤링, 날짜 이용해서 구획 주기 방법 고안

      <div>
        {Object.keys(boxes).map((k, index) => {
          console.log(boxes[k]);
          return (
            <div>
              <h1>
                <Badge color="secondary" key={boxes[k][0].date.slice(5, 7)}>
                  {boxes[k][0].date.slice(5, 7)}월
                </Badge>
              </h1>
              <Row xs="4">
                {boxes[k].map((inbox, i) => {
                  console.log(inbox);
                  return (
                    <TodoBox
                      className="todo-box"
                      key={inbox.date.toString()}
                      userinfo={userinfo}
                      box={inbox}
                    />
                  );
                })}
              </Row>
            </div>
          );
        })}
        {/* {calendar.map((box,i )=> {
            return <TodoBox  
            className="todo-box" key={i} userinfo={userinfo} box={calendar[i]}/>
          })} */}
      </div>
    );
  }
}
export default TodoBoxContainer;
