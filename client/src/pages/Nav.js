import React from 'react';
import { Nav, NavItem, NavLink, Progress, Row, Col } from 'reactstrap';

const Navi = ({ userinfo }) => {
  return (
    <>
      <Row>
        <Col xs="8">
          <Nav>
            <NavItem>
              <NavLink href="#">Habitube 소개</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">취미 보러가기</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                {userinfo.username}님 안녕하세요
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="4">
          <Progress color="warning" value="30" />
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default Navi;
