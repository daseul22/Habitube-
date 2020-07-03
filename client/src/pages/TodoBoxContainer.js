import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoBox from './TodoBox'

import {Badge, Row} from 'reactstrap'
import '../etc/App.css';
let arr = [1,2,3,4]

class TodoBoxContainer extends Component{
  state = {
    showListComponent: false
  };

  render(){
    const { boxes, userinfo, calendar } = this.props;

    return(
      // 날 => 월로 환산하는데, 이번달 다음달을 어떻게 구분하지?
      // 무한 스크롤링, 날짜 이용해서 구획 주기 방법 고안
      
      <div>
        <h1><Badge color="secondary">7월</Badge></h1>
        <Row>
          {arr.map((box,i )=> {
            return <TodoBox  
            className="todo-box" key={i} userinfo={userinfo} boxes={boxes}/>
          })}
          <TodoBox  
          className="todo-box" userinfo={userinfo} boxes={boxes}/>
          <TodoBox 
          className="todo-box" userinfo={userinfo} boxes={boxes}/>
          <TodoBox 
          className="todo-box" userinfo={userinfo} boxes={boxes}/>
        </Row>
      </div>
    )
  }
}
export default TodoBoxContainer