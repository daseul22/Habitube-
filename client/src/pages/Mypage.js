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
import { Container, Button, Row, Col } from 'reactstrap';
import { getMypage } from '../modules/mypage';
import { get } from 'immutable';
import makeit from '../etc/img/26379-demo-files.json';

import Lottie from 'react-lottie';

// 마이페이지에서 componentDidMount에서 axios하지말고 수정이 필요함

const Mypage = ({ userinfo, isLogin }) => {
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
    <div className="mypage">
      {/* {Array.isArray(data) ? history.push('/achievementgoal') : null} */}
      {console.log(Array.isArray(data))}
      <Container>
        <Nav userinfo={userinfo} />
        <h2>당신의 주제: {userinfo.keyword}</h2>
        <TodoBoxContainer boxes={data} userinfo={userinfo} />
      </Container>
      {error && <Makeit />}
    </div>
  );
};

export default withRouter(Mypage);

const Makeit = () => {
  let history = useHistory();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: makeit,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <Lottie options={defaultOptions} width={600} />
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Button
            color="success"
            className="achievementgoal-btn"
            onClick={() => history.push('/achievementgoal')}
          >
            맞춤형 달력 만들러 가기
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
