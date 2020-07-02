import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoBox from './TodoBox'

class TodoBoxContainer extends Component{
  state = {};
  render(){
    const {info} = this.props;
    return(
      <div>
        <TodoBox info={info}/>
      </div>
    )
  }
}
export default TodoBoxContainer