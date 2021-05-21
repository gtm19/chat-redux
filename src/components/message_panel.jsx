import React, { Component, createRef } from "react";

import MessageList from "../containers/message_list";
import MessageForm from "../containers/message_form";

class MessagePanel extends Component {
  constructor(props) {
    super(props);
    this.messageList = createRef();
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="message-list container">
        <MessageList ref={this.messageList} />
        <MessageForm />
      </div>
    );
  }
}

export default MessagePanel;
