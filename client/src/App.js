import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Mypage  from './pages/Mypage'
import AchievementGoal from './pages/AchievementGoal'

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Switch>
          <Route path="/achievementgoal" render={() => <AchievementGoal/> }/>
          <Route path="/mypage" render={() => <Mypage/> }/>
          <Route path="/" render={() => {
            return <Redirect to="/mypage" />
          } }
          />
        </Switch>
      </div>
    )
  }
}

export default App;
