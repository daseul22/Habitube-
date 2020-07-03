import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter, Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  ButtonGroup,
  Label,
  Input,
  FormText,
  Button,
} from 'reactstrap';
import '../etc/App.css';
import axios from 'axios';

class AchievementGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 질의문(keyword), 시작일 , 기간 ,빈도수
      keyword: '',
      startDay: '',
      term: '', //기간
      selectedDay: [],
      cSelected: [],
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { keyword, startDay, term, selectedDay } = this.state;

    return (
      <Form inline className="achivementgoal-form">
        <h1>AchievementGoal</h1>
        <FormGroup>
          <h5>질의문을 입력해주세요</h5>
          <Input
            type="query"
            placeholder="ex)운동하기"
            onChange={this.handleInputValue('keyword')}
          />
        </FormGroup>
        <FormGroup className="achivementgoal-select">
          <Label for="exampleSelect">
            <h5>오늘로 부터 몇 일 후에 시작하시겠습니까?</h5>
          </Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <span> 일</span>

          <Label for="exampleSelect">
            <h5>시작날 로부터 몇 일 동안 진행하시겠습니까?</h5>
          </Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <span> 일</span>
          <FormGroup>
            <FormText></FormText>
          </FormGroup>
          <Input />
          <Label>일</Label>
        </FormGroup>
        <h5>원하는 요일을 선택하세요</h5>
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => this.onCheckboxBtnClick('일')}
            active={this.state.cSelected.includes('일')}
          >
            일
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckboxBtnClick('월')}
            active={this.state.cSelected.includes('월')}
          >
            월
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckboxBtnClick('화')}
            active={this.state.cSelected.includes('화')}
          >
            화
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckboxBtnClick('수')}
            active={this.state.cSelected.includes('수')}
          >
            수
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckboxBtnClick('목')}
            active={this.state.cSelected.includes('목')}
          >
            목
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckboxBtnClick('금')}
            active={this.state.cSelected.includes('금')}
          >
            금
          </Button>
          <Button
            color="primary"
            onClick={() => this.onCheckboxBtnClick('토')}
            active={this.state.cSelected.includes('토')}
          >
            토
          </Button>
        </ButtonGroup>
        <p>
          선택일 : {JSON.stringify(this.state.cSelected)} 주{' '}
          {this.state.cSelected.length}일 선택하셨습니다.
        </p>
      </Form>
    );
  }
}

export default withRouter(AchievementGoal);
