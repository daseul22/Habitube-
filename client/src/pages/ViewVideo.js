import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Button, Input } from 'reactstrap';
import { Card } from 'reactstrap';
import axios from 'axios';
import '../etc/App.css';
import YouTube from 'react-youtube';
import { getMypage } from '../modules/mypage';

const ViewVideo = ({ handleModal, selectedVideo, id }) => {
  const opts = {
    height: '720',
    width: '1180',
    playerVars: {
      autoplay: 1,
    },
  };
  const [text, setText] = useState(false);
  const [text2, setText2] = useState(false);
  const [textContent, setTextContent] = useState('메모를 입력해주세요');
  const [textTitle, setTextTitle] = useState('제목을 입력해주세요');
  const [textVal, setTextVal] = useState('');
  const [titleVal, setTitleVal] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="myModal">
      <Card className="mymodal-content">
        <h1>ViewVideo</h1>
        <YouTube videoId={selectedVideo.id.videoId} opts={opts} />
        {!text2 && (
          <Alert color="light" onClick={() => setText2(true)}>
            {' '}
            {textTitle}
          </Alert>
        )}
        {text2 && (
          <Input
            type="textarea"
            onChange={(e) => setTitleVal(e.target.value)}
          ></Input>
        )}

        {!text && (
          <Alert color="light" onClick={() => setText(true)}>
            {' '}
            {textContent}
          </Alert>
        )}
        {text && (
          <Input
            type="textarea"
            onChange={(e) => setTextVal(e.target.value)}
          ></Input>
        )}
        <Button
          outline
          color="secondary"
          onClick={() => {
            setText(false);
            setText2(false);
            setTextContent(textVal);
            setTextTitle(titleVal);
            dispatch(getMypage());
            axios
              .post(
                'http://localhost:3000/mypage/selectvideo',
                {
                  id: id,
                  memoTitle: textTitle,
                  memoContent: textContent,
                },
                { withCredentials: true },
              )
              .then(() => {
                console.log('입력');
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          입력
        </Button>
        <Button onClick={handleModal}>x</Button>
      </Card>
    </div>
  );
};
export default ViewVideo;
