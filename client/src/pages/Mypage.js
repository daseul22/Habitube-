import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect , withRouter, Switch, Route} from 'react-router-dom';
import TodoBoxContainer from './TodoBoxContainer'
import Nav from './Nav'
import axios from 'axios'
import { Container } from 'reactstrap';

// 마이페이지의 상태 : memoTitle, memoContent, youtubeInfo, isComplete, date
// 목표 정보가 있는지 서버에 요청
// o => TodoBoxContainer
// x => AchievementGoal
// 마이페이지에서 어떻게 포스트하지?
// [{memoTitle: '', memoContent: '', youtubeInfo:'', 
// isComplete: true, date:'2020-06-30 월'},{}]
class Mypage extends Component{
  state = {
    boxes:[]
  };
  componentDidMount(){
    const { userinfo, isLogin } = this.props
    const { boxes } = this.state
    
    axios.post('http://localhost:3000/mypage',{id: userinfo.id})
    .then(result => {
      console.log(result);
      result.data.length ? this.setState({boxes: result.data}) : this.props.history.push('/achievementgoal')
      ;
      
    }).catch(err=>{
      this.props.history.push('/achievementgoal')
    })
  }
  
  render() {
    const { userinfo, calendar } = this.props
    const { boxes } = this.state
    return (
      <div>
      <Container>
        <Nav/>
        <h1>Mypage</h1>
          
        
        <TodoBoxContainer calendar={calendar} boxes={boxes} userinfo={userinfo}
        />
        
      </Container>
      </div>
    );
  }
}

export default withRouter(Mypage) 
