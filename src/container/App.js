import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Login from '../components/login';
import Welcome from '../components/welcome';
import Notfound from '../components/notfound';
import Profile from '../components/user/profile';

class App extends Component {
    render() {
        return (
            <Router basename="/">
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="*" component={Notfound}/>
                </Switch>
            </Router>
        );
    }
}

export default App;