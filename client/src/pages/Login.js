import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../modules/login';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

class Login extends Component {
  state = {
    emailValue: '',
    passwordValue: '',
  };

  handleEmailChange = e => {
    this.setState({
      emailValue: e.target.value,
    });
  };

  handlePasswordChange = e => {
    this.setState({
      passwordValue: e.target.value,
    });
  };

  handleLogin = () => {
    const { emailValue, passwordValue } = this.state;
    const { LoginActions } = this.props;

    LoginActions.login({ email: emailValue, password: passwordValue }).then(
      () => {
        localStorage.setItem('isLogin', true);
      },
    );
  };

  render() {
    const { emailValue, passwordValue } = this.state;
    const { isLogin } = this.props;

    // login 이 되어있으면 mypage로 이동 , 안 되어 있으면 다시 login 으로 이동
    return (
      <div>
        {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/login" />}

        <LoginInput
          emailValue={emailValue}
          passwordValue={passwordValue}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    isLogin: state.login.isLogin,
  }),
  dispatch => ({
    LoginActions: bindActionCreators(loginActions, dispatch),
  }),
)(Login);
