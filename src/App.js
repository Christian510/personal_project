import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Sign_Up from './components/Sign_Up/Sign_Up';
import User_Main from './components/User_Main/User_Main';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Sign_Up} exact />
          <Route path='/User_Main' component={User_Main} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;