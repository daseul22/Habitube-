import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Redirect , withRouter} from 'react-router-dom';


import axios from 'axios'

class AchievementGoal extends Component{
  state = {

  };

  render(){
    return(
      <div>
      <h1>AchievementGoal</h1>
      </div>
    )
  }
}  

export default withRouter(AchievementGoal) 