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
  const { data, doing, error } = useSelector((state) => state.mypage);
  const err = useSelector((state) => state.mypage.pending);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  //console.log(boxes);
  useEffect(() => {
    console.log(err);
    if (!isLogin) return history.push('/login');
    setLoading(true);
    dispatch(getMypage());

    // error 케이스 잡는방법

    setLoading(false);
  }, []);

  return (
    <div>
      {/* {Array.isArray(data) ? history.push('/achievementgoal') : null} */}
      {console.log(Array.isArray(data))}
      <Container>
        <Nav userinfo={userinfo} />
        <h1>당신의 주제: {keyword}</h1>
        <TodoBoxContainer boxes={data} userinfo={userinfo} />
      </Container>
    </div>
  );
};

export default withRouter(Mypage);
