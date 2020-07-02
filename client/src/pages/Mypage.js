import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect , withRouter} from 'react-router-dom';
import TodoBoxContainer from './TodoBoxContainer'
import axios from 'axios'

// 마이페이지의 상태 : memoTitle, memoContent, youtubeInfo, isComplete, date
// 목표 정보가 있는지 서버에 요청
// o => TodoBoxContainer
// x => AchievementGoal
// 마이페이지에서 어떻게 포스트하지?
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
        <h1>Mypage</h1>
          <button onClick={e=>{
            axios.post('http://localhost:3000/mypage/goal')
            .then(result => {
              console.log(result);
            }).catch(err=>{
              this.props.history.push('/achievementgoal')
            })
          }}>정보 불러오기 </button>
        
        <TodoBoxContainer info={this.state}/>
      </div>
    )
  }
}  

export default withRouter(Mypage) 