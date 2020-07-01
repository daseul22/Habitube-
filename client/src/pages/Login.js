import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  ButtonToggle,
  Media,
} from 'reactstrap';
import '../etc/App.css';

class Login extends Component {
  state = {
    emailValue: '',
    passwordValue: '',
  };

  render() {
    // login 이 되어있으면 mypage로 이동 , 안 되어 있으면 다시 login 으로 이동
    return (
      <Form className="login-form">
        <Media left top href="">
          {/* <Media object data-src="../etc/youtube.jpeg/64*64" alt="" /> */}
        </Media>
        <h1 className="text-center">
          <span className="font-weight-bold">Habitube</span>
        </h1>
        <FormGroup>
          <Label mt-5 size="lg">
            Email
          </Label>
          <Input invalid type="email" placeholder="Email" />
          <FormFeedback>이미 등록된 이메일에요!!</FormFeedback>
          <FormText>이메일을 입력하세요.</FormText>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" /> email 기억
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label size="lg">Password</Label>
          <Input invalid type="password" placeholder="Password" />
          <FormFeedback>숫자로 이루어진 비밀번호는 없습니다.</FormFeedback>
          <FormText>비밀번호를 입력하세요.</FormText>
          <br></br>
          <br></br>
        </FormGroup>
        <ButtonToggle className="btn-lg btn-block" color="primary">
          로그인
        </ButtonToggle>{' '}
        <ButtonToggle className="btn-lg btn-block" color="secondary">
          회원가입
        </ButtonToggle>{' '}
        <div className="text-center pt-3">
          회원가입이 안 되어있으면 회원가입 하세요
        </div>
        <div className="text-center">
          <a href="/signup">회원가입</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">비밀번호를 잊어버렸어요</a>
        </div>
      </Form>
    );
    // <div className="App">login page입니다.</div>;
  }
}
export default Login;
