import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
// import { Login } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/mypage" component={Mypage} />
        </Switch>
      </div>
    );
  }
}

export default App;

// app 수정 , 실제로 주소를 바꾸는 방법이 많음, route 분기만 갈라놓은 것 , Link , redireciton, history 통일을 해줘야 함.
