import React from 'react';
import './App.css';

import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import configurateStore from './store/configureStore';

import Home from '../src/views/Home';
import register from '../src/containers/register';
import login from '../src/containers/login';

import { history } from '../src/_helpers/history';
import Book from './views/Book';


function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={login}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/register" component={register}></Route>
      <Route exact path="/book/:id" component={Book}></Route>
    </React.Fragment>
  );
}

const store = configurateStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
