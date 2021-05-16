import React from 'react';
import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";

const App = () => {
  return (
    <div className="app">
      <div className="side-bar">
        <p>React + Redux starter</p>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
