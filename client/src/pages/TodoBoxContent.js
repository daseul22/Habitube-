import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { Card } from 'reactstrap';
import axios from 'axios';

class TodoBoxContent extends Component {
  state = {
    videoList: [],
  };
  // videoList 길이만큼 링크를 띄우면됨.
  // 1. getvideolist => 동영상 리스트 받아오기
  // 2. selectedvideo => 동영상 선택하기 => 동영상 정보를 다시 받아와야함 => mypage 요청
  componentDidMount() {
    axios
      .get('http://localhost:3000/mypage/getvideolist', {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result);
        this.setState({ videoList: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { boxes, handleModal, handleShowPreview } = this.props;

    return (
      <div className="myModal">
        <Card className="mymodal-content">
          <h1>TodoBoxContent</h1>
          <Alert
            color="light"
            onClick={(e) => {
              handleShowPreview();
              handleModal();
              console.log('clicked');
              axios
                .post('http://localhost:3000/mypage/selectvideo', { id: 1 })
                .then((result) => {
                  console.log(result);
                  handleShowPreview();
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            {' '}
            목업 인터렉션
          </Alert>
          <Alert color="light"> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Alert color="light"> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Button onClick={handleModal}>x</Button>
        </Card>
      </div>
    );
  }
}
export default TodoBoxContent;
