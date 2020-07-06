import React, { Component } from 'react';

import { Redirect, Link, withRouter } from 'react-router-dom';
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
import axios from 'axios';

class Login extends Component {
  state = {
    emailValue: '',
    passwordValue: '',
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { handleInputValue } = this;
    const { emailValue, passwordValue } = this.state;
    const { handleId, handleLogin } = this.props;

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
          <Label>Email</Label>
          <Input
            invalid
            type="emailValue"
            placeholder="Email"
            onChange={handleInputValue('emailValue')}
          />
          <FormFeedback>이미 등록된 이메일에요!!</FormFeedback>
          <FormText>이메일을 입력하세요.</FormText>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" /> email 기억
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            invalid
            type="password"
            placeholder="Password"
            onChange={handleInputValue('passwordValue')}
          />
          <FormFeedback>숫자로 이루어진 비밀번호는 없습니다.</FormFeedback>
          <FormText>비밀번호를 입력하세요.</FormText>
          <br></br>
        </FormGroup>
        <ButtonToggle
          className="btn-lg btn-block"
          color="primary"
          onClick={() => {
            axios
              .post(
                'http://localhost:3000/login',
                { email: emailValue, password: passwordValue },
                { withCredentials: true },
              )
              .then((result) => {
                console.log(result.data.userInfo);
                handleId(result.data.userInfo);
                handleLogin();
                this.props.history.push('/mypage');
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          로그인
        </ButtonToggle>{' '}
        <Link to="/signup">
          <ButtonToggle className="btn-lg btn-block" color="secondary">
            회원가입
          </ButtonToggle>{' '}
        </Link>
        <div className="text-center pt-3">
          회원가입이 안 되어있으면 회원가입 하세요
        </div>
        <div className="text-center">
          <a href="/forgot-password">비밀번호를 잊어버렸어요</a>
        </div>
      </Form>
    );
    // <div className="App">login page입니다.</div>;
  }
}
export default withRouter(Login);
