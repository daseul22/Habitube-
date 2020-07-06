import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import TodoBoxContent from './TodoBoxContent';
import ViewVideo from './ViewVideo';
import img2 from '../etc/img/img2.png';
import '../etc/App.css';

// todobox에서 gettodobox 요청을 또보내야하는지??
// todobox에서 섬네일누르면 모달로 영상재생화면 띄우기
// 영상설정하기 버튼 => 모달로 todoboxContent 띄우기
// isComplete boxes에서 받아서 해야함.
class TodoBox extends Component {
  state = {
    isComplete: false,
    selectedVideo: {},
    isShowPreview: false,
    viewContentModal: false,
    viewVideoModal: false,
  };

  handleContentModal = () => {
    this.setState({ viewContentModal: !this.state.viewContentModal });
  };
  handleVideoModal = () => {
    this.setState({ viewVideoModal: !this.state.viewVideoModal });
  };
  handleComplete = () => {
    this.setState({ isComplete: !this.state.isComplete });
  };

  handleShowPreview = () => {
    this.setState({ isShowPreview: true });
  };
  handleselectedVideo = (value) => {
    this.setState({ selectedVideo: value });
  };

  render() {
    const { userinfo, box } = this.props;
    const {
      handleVideoModal,
      handleContentModal,
      handleComplete,
      handleShowPreview,
      handleselectedVideo,
    } = this;
    const { viewContentModal, viewVideoModal, isShowPreview } = this.state;
    // boxes 정보가 없으면 div 숨기기
    return (
      <div>
        <Col className="boxes-col">
          <Card className="boxes-col">
            <CardTitle>{box.date}</CardTitle>
            <Button outline color="secondary" onClick={handleContentModal}>
              영상 설정하기
            </Button>
            {isShowPreview && (
              <TodoBoxPreview
                userinfo={userinfo}
                handleComplete={handleComplete}
                handleVideoModal={handleVideoModal}
              />
            )}
          </Card>
        </Col>
        {viewContentModal && (
          <TodoBoxContent
            handleModal={handleContentModal}
            id={userinfo.id}
            handleShowPreview={handleShowPreview}
            handleselectedVideo={handleselectedVideo}
          />
        )}
        {viewVideoModal && <ViewVideo handleModal={handleVideoModal} />}
      </div>
    );
  }
}
export default TodoBox;

const TodoBoxPreview = (props) => (
  <div>
    <Button
      color="success"
      onClick={(e) => {
        axios
          .post('http://localhost:3000/todaycomplete', {
            id: props.userinfo.id,
          })
          .then((result) => {
            console.log(result);
            props.handleComplete();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      check
    </Button>
    <Media
      width="250px"
      object
      src={img2}
      alt="썸네일"
      onClick={props.handleVideoModal}
    />
    <CardText>memotitle</CardText>
  </div>
);
