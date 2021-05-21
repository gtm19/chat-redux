import React, { Component } from 'react';
import MessageList from "../components/message_panel";
import ChannelList from "../containers/channel_list";

const App = () => {
  return (
    <div className="app">
      <div className="side-bar container">
        <img className="logo" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="The Le Wagon logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
