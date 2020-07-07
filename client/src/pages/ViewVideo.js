import React, { useState } from 'react';
import { connect, Provider } from 'react-redux';
import { Alert, Button, Input } from 'reactstrap';
import { Card } from 'reactstrap';
import axios from 'axios';
import img2 from '../etc/img/img2.png';
import '../etc/App.css';
import YouTube from 'react-youtube';

const ViewVideo = ({ handleModal, selectedVideo }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  const [text, setText] = useState(false);
  const [textContent, setTextContent] = useState('메모를 입력해주세요');
  const [textVal, setTextVal] = useState('');
  return (
    <div className="myModal">
      <Card className="mymodal-content">
        <h1>ViewVideo</h1>
        {/* <Media
          width="720px"
          object
          src={selectedVideo.snippet.thumbnails.high.url}
          alt="썸네일"
        /> */}
        <YouTube videoId={selectedVideo.id.videoId} />
        <Alert color="light"> memoTitle</Alert>
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
            setTextContent(textVal);
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
