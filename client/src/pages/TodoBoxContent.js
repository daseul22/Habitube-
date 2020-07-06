import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { Card } from 'reactstrap';
import axios from 'axios';
import img2 from '../etc/img/img2.png';
import img3 from '../etc/img/img3.png';
import img4 from '../etc/img/img4.png';

class TodoBoxContent extends Component {
  state = {
    videoList: [img2, img3, img4],
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
    const { handleModal, handleShowPreview, handleselectedVideo } = this.props;
    const { videoList } = this.state;

    return (
      <div className="myModal">
        <Card className="mymodal-content">
          <h1>TodoBoxContent</h1>
          {videoList.map((video, i) => {
            return (
              <OneVideoLink
                key={'OneVideoLink' + i}
                video={video}
                handleModal={handleModal}
                handleShowPreview={handleShowPreview}
                handleselectedVideo={handleselectedVideo}
              />
            );
          })}

          <Button onClick={handleModal}>x</Button>
        </Card>
      </div>
    );
  }
}
export default TodoBoxContent;

const OneVideoLink = ({
  handleModal,
  handleShowPreview,
  handleselectedVideo,
  video,
}) => {
  return (
    <Alert
      color="light"
      onClick={(e) => {
        handleShowPreview();
        handleModal();
        handleselectedVideo(video);
        console.log('clicked');
        axios
          .post('http://localhost:3000/mypage/selectvideo', { id: 1 })
          .then((result) => {
            console.log(result);
            handleShowPreview();
            handleselectedVideo();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {' '}
      목업 인터렉션
    </Alert>
  );
};
