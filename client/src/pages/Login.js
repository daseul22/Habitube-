import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    emailValue: '',
    passwordValue: '',
  };

  render() {
    // login 이 되어있으면 mypage로 이동 , 안 되어 있으면 다시 login 으로 이동
    return (
      <div>
        <div>login page입니다.</div>
      </div>
    );
  }
}
export default Login;
