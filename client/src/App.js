import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'



class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Route/>
        <Switch>
          <Route/>
        </Switch>
      </div>
    )
  }
}

export default App;
