// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
//   Import the things
import channelsReducer from "./reducers/channels_reducer";
import currentUsernameReducer from "./reducers/current_username_reducer";
import messagesReducer from "./reducers/messages_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";

//   Reduce the things
const reducers = combineReducers({
  channels: channelsReducer,
  currentUsername: currentUsernameReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer
});

// middleware
const middleware = applyMiddleware(reduxPromise);

// initialState
const initialState = {
  messages: [],
  channels: ["test", "general", "react", "paris"],
  selectedChannel: "test",
  currentUsername: "Elon" || window.prompt("What is your username?") ||  `user${Math.floor(Math.random() * 1e6)}` //eslint-disable-line
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleware)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
