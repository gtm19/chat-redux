import React from 'react';
import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";

const App = () => {
  return (
    <div className="app">
      <div className="side-bar">
        <img className="logo" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="The Le Wagon logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
