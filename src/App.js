import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import configurateStore from './store/configureStore';

import Home from '../src/views/Home';
import Login from '../src/views/Login';
import Register from '../src/views/Register';

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
    </React.Fragment>
  );
}

const store = configurateStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
