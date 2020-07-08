import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { Card } from 'reactstrap';
import axios from 'axios';
import img2 from '../etc/img/img2.png';
import img3 from '../etc/img/img3.png';
import img4 from '../etc/img/img4.png';
import { getMypage } from '../modules/mypage';

const TodoBoxContent = ({
  handleModal,
  handleShowPreview,
  handleselectedVideo,
  id,
  date,
}) => {
  const { data, doing, error } = useSelector((state) => state.videolist);
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
              id={id}
              date={date}
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
  id,
  date,
}) => {
  const dispatch = useDispatch();
  return (
    <Alert
      color="light"
      onClick={(e) => {
        console.log('clicked');
        axios
          .post(
            'http://localhost:3000/mypage/selectvideo',
            {
              id: id,
              selectedVideo: video,
              date: date,
            },
            { withCredentials: true },
          )
          .then(() => {
            dispatch(getMypage());
            setTimeout(500);
            console.log('영상');
            handleShowPreview();
            handleModal();
            handleselectedVideo(video);
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
