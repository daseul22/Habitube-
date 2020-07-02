import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoBox extends Component{
  state = {};
  render(){
    return(
      <div>
        {this.props.info.memoTitle}
      </div>
    )
  }
}
export default TodoBox