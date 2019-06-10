import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import configurateStore from './store/configureStore';

import Home from '../src/views/Home';
import Login from '../src/views/Login';
import Register from '../src/views/Register';

var client_id = '48a70e784037410787d4a3d41a25e8c1'; // Your client id
var client_secret = '1ebf705584d241e8a05149dded6bf1b7'; // Your secret
var redirect_uri = ''; // Your redirect uri

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/home" component={Home}></Route>
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
