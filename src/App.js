import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';

function App() {
  return (
    <div className='app'>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/about' component={About}/>
          <Route path='/category/:categoryName' component={Category} />
          <Route path='*' component={Page404} />
        </Switch>
    </div>
  );
}

export default App;
