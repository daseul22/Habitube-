import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Alert, Button, Media } from 'reactstrap';
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
        <Alert color="light"> memoContent</Alert>
        <Button onClick={handleModal}>x</Button>
      </Card>
    </div>
  );
};
export default ViewVideo;
