import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Alert, Button, Media } from 'reactstrap';
import { Card } from 'reactstrap';
import axios from 'axios';
import img2 from '../etc/img/img2.png';
import '../etc/App.css';

class ViewVideo extends Component {
  state = {
    videoList: [],
  };
  componentDidMount() {}
  render() {
    const { handleModal } = this.props;

    return (
      <div className="myModal">
        <Card className="mymodal-content">
          <h1>ViewVideo</h1>
          <Media width="720px" object src={img2} alt="썸네일" />
          <Alert color="light"> memoTitle</Alert>
          <Alert color="light"> memoContent</Alert>
          <Button onClick={handleModal}>x</Button>
        </Card>
      </div>
    );
  }
}
export default ViewVideo;
