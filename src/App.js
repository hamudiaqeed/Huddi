import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';

class App extends React.Component {

  constructor() {
    super();
    this.state={};
  }

  render() {

    return (
      <div className='app'>

          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            {/* <Route exact path='/' component={Home} /> */}
            <Route
            exact path='/'
            render={(props) => <Home
              {...props}
            />}
          />
            <Route path='/about' component={About}/>
            <Route path='/category/:categoryName' component={Category} />
            <Route path='/cart' component={Cart} />
            <Route path='*' component={Page404} />
          </Switch>
      </div>
    );
  }
}

export default App;