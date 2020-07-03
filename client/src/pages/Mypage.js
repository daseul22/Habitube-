import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect , withRouter} from 'react-router-dom';
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
    
  }
  getTodoBox = value => {
    this.setState({boxes: value})
  }
  render() {
    const { userinfo, calendar } = this.props
    const { boxes } = this.state
    const { getTodoBox } = this
    return (
      <Container>
        <Nav/>
        <h1>Mypage</h1>
          <button onClick={e=>{
            axios.post('http://localhost:3000/mypage',{id: userinfo.id})
            .then(result => {
              console.log(result);
              result.length ? this.setState({boxes: result}) : this.props.history.push('/achievementgoal');
              
            }).catch(err=>{
              this.props.history.push('/achievementgoal')
            })
          }}>정보 불러오기 </button>
        
        <TodoBoxContainer calendar={calendar} boxes={boxes} userinfo={userinfo}
        getTodoBox={getTodoBox}/>
        
      </Container>
    );
  }
}

export default withRouter(Mypage) 
