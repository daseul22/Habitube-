import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'
import { Alert, Button } from 'reactstrap';
import {Card} from 'reactstrap'
import axios from 'axios';

class TodoBoxContent extends Component{
  state = {
    videoList : []
  };
  componentDidMount(){
    axios.post('http://localhost:3000/mypage/getvideolist',
    {id:this.props.id})
    .then(result => {
      console.log(result)
      this.setState({videoList: result})
    }).catch(err => {
      console.log(err)
    })
  }
  render(){
    const { boxes, handleShow} = this.props;
    
    return(
      <div className="myModal">
        <Card className="mymodal-content">
          <h1>TodoBoxContent</h1>   
          <Alert color="light"> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Alert color="light"> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Alert color="light"> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Button onClick={handleShow}>x</Button>
        </Card>
     </div>
    )
  }
}
export default TodoBoxContent