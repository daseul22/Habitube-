import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Mypage from '../src/pages/Mypage'


class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Mypage/>
      </div>
    )
  }
}

export default App;
