import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'
import { Alert, Button } from 'reactstrap';
import {Card} from 'reactstrap'
import axios from 'axios';

class TodoBoxContent extends Component{
  state = {
    videoList : []
  };
  // videoList 길이만큼 링크를 띄우면됨.
  // 1. getvideolist => 동영상 리스트 받아오기
  // 2. selectedvideo => 동영상 선택하기 => 동영상 정보를 다시 받아와야함 => mypage 요청
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
    const { boxes, handleShow, getTodoBox } = this.props;
    
    return(
      <div className="myModal">
        <Card className="mymodal-content">
          <h1>TodoBoxContent</h1>   
          <Alert color="light" onClick={e=> {
            axios.post('http://localhost:3000/mypage/selectvideo',{id: 1})
            .then(result => {
              console.log(result);
              axios.post('http://localhost:3000/mypage',{id: 1})
            }).then(result => {
              console.log(result);
              getTodoBox(result.data)
            }).
            catch(err=>{
              console.log(err)
            })
          }}> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Alert color="light"> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Alert color="light"> 여기에 동영상 링크가 삽입됩니다.</Alert>
          <Button onClick={handleShow}>x</Button>
        </Card>
     </div>
    )
  }
}
export default TodoBoxContent