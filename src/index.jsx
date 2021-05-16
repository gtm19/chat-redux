// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

// initialState
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUsername: window.prompt("What is your username?") ||  `user${Math.floor(Math.random() * 1e6)}` //eslint-disable-line
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
