import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import User from './Components/users/User';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './Components/layout/Home';

import './App.css';
import NotFound from './Components/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='GitHub Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route path='*' component={NotFound} />
                {/* render={props => <User {...props} />} */}
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
