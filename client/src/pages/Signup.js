import React, { Component } from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    return <Redirect to="/mypage" />;
  }

  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <Form className="signup-form">
        <h1 className="text-center">
          <span className="font-weight-bold">회원가입</span>
        </h1>
        <FormGroup>
          <Label>이메일</Label>
          <Input
            valid={true}
            type="email"
            placeholder="이메일"
            onChange={this.handleInputValue('email')}
          />
        </FormGroup>

        <FormGroup>
          <Label>비밀번호</Label>
          <Input
            valid={false}
            type="password"
            placeholder="Password"
            onChange={this.handleInputValue('password')}
          />
        </FormGroup>

        <FormGroup>
          <Label>이름</Label>
          <Input
            invalid
            type="name"
            placeholder="이름"
            onChange={this.handleInputValue('username')}
          />
        </FormGroup>

        <Link
          style={{ paddingLeft: 8, textDecoration: 'none' }}
          onSubmit={this.handleSubmit}
        >
          <Button
            onClick={() => {
              axios
                .post('http://localhost:3000/signup',
                {email: this.state.email, password: this.state.password, username: this.state.username},
                {withCredentials:true}
                )
                .then(result => {
                  console.log(result);
                  this.props.history.push('/login');
                  alert('가입완료');
                })
                .catch(err => {
                  console.log(err);
                });

              // alert('이미등록된 이메일입니다.');
              //
            }}
            className="btn-lg btn-block"
            color="primary"
            type="submit"
          >
            회원가입완료
          </Button>
        </Link>
      </Form>
      // signup -> onclick =>
    );
  }
}

export default withRouter(Signup);

/* 
1.acivementgoal 에서 mypage로 이동
2.state값들 db에 전달

*/
