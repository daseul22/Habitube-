import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoBox from './TodoBox';
import { getMypage } from '../modules/mypage';
import { Badge, Row, ButtonGroup, Button } from 'reactstrap';
import '../etc/App.css';
let arr = [1, 2, 3, 4];

// 처음 가입후 정보입력 => 달력: calendar
// 정보 불러오기 => 달력 + todobox 정보: boxes
// 달 넘길때마다 데이터 패치
// 페이지 빈공간에 데이터없음 표시
const TodoBoxContainer = ({ boxes, userinfo }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    //setMaxPage(Object.keys(boxes).length);
    setLoading(false);
  }, []);

  return (
    // 날 => 월로 환산하는데, 이번달 다음달을 어떻게 구분하지?
    // 무한 스크롤링, 날짜 이용해서 구획 주기 방법 고안
    // 페이지네이션 : 페이지를 컴포넌트로 빼고 props로 현재 스테이트인 페이지만 주기
    <>
      <Button
        onClick={() => {
          setCurrentPage(currentPage - 1);
          dispatch(getMypage());
        }}
      >
        이전달
      </Button>
      <Button
        onClick={() => {
          setCurrentPage(currentPage + 1);
          dispatch(getMypage());
        }}
      >
        다음달
      </Button>
      {Object.keys(boxes).map((k, index) => {
        if (index === currentPage) {
          return (
            <Page
              key={`currentPage` + currentPage}
              boxes={boxes[k]}
              userinfo={userinfo}
            />
          );
        }
      })}
    </>
  );
};

export default TodoBoxContainer;

const Page = ({ boxes, userinfo }) => {
  return (
    <div>
      <h1>
        <Badge color="secondary" key={boxes[0].date.slice(5, 7)}>
          {boxes[0].date.slice(5, 7)}월
        </Badge>
      </h1>
      <Row xs="4">
        {boxes.map((inbox, i) => {
          console.log(inbox);
          return (
            <TodoBox
              className="todo-box"
              key={inbox.date.toString()}
              userinfo={userinfo}
              box={inbox}
            />
          );
        })}
      </Row>
    </div>
  );
};
