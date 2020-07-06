import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Switch, Route } from 'react-router-dom';
import TodoBoxContainer from './TodoBoxContainer';
import Nav from './Nav';
import axios from 'axios';
import { Container } from 'reactstrap';

// 마이페이지의 상태 : memoTitle, memoContent, youtubeInfo, isComplete, date
// 목표 정보가 있는지 서버에 요청
// o => TodoBoxContainer
// x => AchievementGoal
// 마이페이지에서 어떻게 포스트하지?
// [{memoTitle: '', memoContent: '', youtubeInfo:'',
// isComplete: true, date:'2020-06-30 월'},{}]
class Mypage extends Component {
  state = {
    boxes: {},
  };
  componentDidMount() {
    const { userinfo, isLogin } = this.props;
    const { boxes } = this.state;
    if (!isLogin) return this.props.history.push('/login');
    axios
      .post(
        'http://localhost:3000/mypage',
        { id: userinfo.id },
        { withCredentials: true },
      )
      .then((result) => {
        console.log(result);
        // 데이터 객체일때 값 존재유무 구별법?
        this.setState({ boxes: result.data });
      })
      .catch((err) => {
        this.props.history.push('/achievementgoal');
      });
  }

  render() {
    const { userinfo, calendar, keyword } = this.props;
    const { boxes } = this.state;
    return (
      <div>
        <Container>
          <Nav userinfo={userinfo} />
          <h1>Mypage: {keyword}</h1>

          <TodoBoxContainer
            calendar={calendar}
            boxes={boxes}
            userinfo={userinfo}
          />
        </Container>
      </div>
    );
  }
}

export default withRouter(Mypage);
