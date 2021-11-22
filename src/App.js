import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';

function App() {
  return (
    <div>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='*' component={Page404} />
        </Switch>
    </div>
  );
}

export default App;
