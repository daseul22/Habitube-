import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import AchievementGoal from './pages/AchievementGoal';
import Signup from './pages/Signup';
import { is } from 'immutable';
// import { Login } from './pages';

class App extends Component {
  state = {
    isLogin: false,
    userinfo: {
      username: '',
      email: '',
      id: '',
    },
    calendar: [],
  };

  handleId = value => {
    this.setState({ userinfo: value });
  };
  getCalendar = value => {
    this.setState({ calendar: value });
  };

  render() {
    const { isLogin, userinfo } = this.state;
    const { handleId, getCalendar } = this;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => <Login handleId={handleId} />}
          />
          <Route
            path="/achievementgoal"
            render={() => <AchievementGoal getCalendar={getCalendar} userinfo={userinfo} />}
          />
          <Route
            path="/mypage"
            render={() => <Mypage userinfo={userinfo} isLogin={isLogin} />}
          />
          <Route path="/signup" render={() => <Signup />} />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/mypage" />;
              }
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

// app 수정 , 실제로 주소를 바꾸는 방법이 많음, route 분기만 갈라놓은 것 , Link , redireciton, history 통일을 해줘야 함.
