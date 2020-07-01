import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
// import { Login } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/mypage" component={Mypage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
