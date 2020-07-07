import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { Card } from 'reactstrap';
import axios from 'axios';
import img2 from '../etc/img/img2.png';
import img3 from '../etc/img/img3.png';
import img4 from '../etc/img/img4.png';

const TodoBoxContent = ({
  handleModal,
  handleShowPreview,
  handleselectedVideo,
  list,
}) => {
  const { data, doing, error } = useSelector((state) => state.videolist);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // videoList 길이만큼 링크를 띄우면됨.
  // 1. getvideolist => 동영상 리스트 받아오기
  // 2. selectedvideo => 동영상 선택하기 => 동영상 정보를 다시 받아와야함 => mypage 요청

  return (
    <div className="myModal">
      <Card className="mymodal-content">
        <h1>TodoBoxContent</h1>
        {console.log(data)}
        {data.map((video, i) => {
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
};
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
      {video.snippet.title}
    </Alert>
  );
};
