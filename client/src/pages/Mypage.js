import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Switch, Route } from 'react-router-dom';
import TodoBoxContainer from './TodoBoxContainer';
import Nav from './Nav';
import axios from 'axios';
import { Container } from 'reactstrap';

// 마이페이지에서 componentDidMount에서 axios하지말고 수정이 필요함

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
          <h1>당신의 주제: {keyword}</h1>

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
