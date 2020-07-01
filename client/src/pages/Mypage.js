import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom';
import TodoBoxContainer from './TodoBoxContainer'

// 마이페이지의 상태 : memoTitle, memoContent, youtubeInfo, isComplete, date
class Mypage extends Component{
  state = {
    memoTitle: '',
    memoContent: '',
    youtubeInfo: {},
    isComplete: false,
    date: ''
  };

  render(){
    return(
      <div>
        <TodoBoxContainer />
      </div>
    )
  }
}  

export default Mypage