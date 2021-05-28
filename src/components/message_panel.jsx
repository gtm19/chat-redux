import React, { Component, createRef } from "react";

import MessageList from "../containers/message_list";
import MessageForm from "../containers/message_form";

class MessagePanel extends Component {
  constructor(props) {
    super(props);
    this.messageList = createRef();
  }

  componentDidMount() {
    if (this.messageList.current) {
      const { current } = this.messageList;
      current.scrollTop = current.scrollHeight;
    }
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
