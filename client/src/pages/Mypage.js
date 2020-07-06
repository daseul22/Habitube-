import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect,
  withRouter,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import TodoBoxContainer from './TodoBoxContainer';
import Nav from './Nav';
import axios from 'axios';
import { Container, Button } from 'reactstrap';
import { getMypage } from '../modules/mypage';
import { get } from 'immutable';

// 마이페이지에서 componentDidMount에서 axios하지말고 수정이 필요함

const Mypage = ({ userinfo, isLogin, keyword }) => {
  const boxes = useSelector((state) => state.mypage.data);
  const history = useHistory();
  const dispatch = useDispatch();
  //console.log(boxes);
  useEffect(() => {
    if (!isLogin) return history.push('/login');
    dispatch(getMypage());
  });

  return (
    <div>
      <Container>
        <Nav userinfo={userinfo} />
        <h1>당신의 주제: {keyword}</h1>
        <TodoBoxContainer boxes={boxes} userinfo={userinfo} />
      </Container>
    </div>
  );
};

export default withRouter(Mypage);
