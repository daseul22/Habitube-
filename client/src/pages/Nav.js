import React from 'react';
import { Nav, NavItem, NavLink, Progress, Row, Col } from 'reactstrap';

const Navi = ({ userinfo }) => {
  return (
    <>
      <Row className="mynav">
        <Col xs="8">
          <Nav>
            <NavItem>
              <NavLink className="link" href="#">
                Habitube 소개
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="#">
                취미 보러가기
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                {userinfo.username}님 안녕하세요
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="4" className="my-progress-bar">
          <Progress multi>
            <Progress animated bar color="success" value="30" />
          </Progress>
        </Col>
        <hr />
      </Row>
    </>
  );
};

export default Navi;
