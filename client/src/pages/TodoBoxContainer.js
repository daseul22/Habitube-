import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoBox from './TodoBox'

import {Badge, Row} from 'reactstrap'
import '../etc/App.css';
let arr = [1,2,3,4]

// 처음 가입후 정보입력 => 달력: calendar
// 정보 불러오기 => 달력 + todobox 정보: boxes
class TodoBoxContainer extends Component{
  state = {
    showListComponent: false, 
    list: []
  };
  componentDidMount(){
   
  }
  
  render(){
    const { boxes, userinfo } = this.props;
    const { list } = this.state
    return(
      // 날 => 월로 환산하는데, 이번달 다음달을 어떻게 구분하지?
      // 무한 스크롤링, 날짜 이용해서 구획 주기 방법 고안
      
      <div>
        <h1><Badge color="secondary">7월</Badge></h1>
        <Row>
          {boxes.map((box,i )=> {
            return <TodoBox  
            className="todo-box" key={i} userinfo={userinfo} box={boxes[i]}/>
          })}
          {/* {calendar.map((box,i )=> {
            return <TodoBox  
            className="todo-box" key={i} userinfo={userinfo} box={calendar[i]}/>
          })} */}
        </Row>
      </div>
    )
  }
}
export default TodoBoxContainer