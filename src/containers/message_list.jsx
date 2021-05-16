import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import Message from "../components/message";
import MessageForm from "../containers/message_form"

import { getMessages } from "../actions";

class MessageList extends Component { //eslint-disable-line
  componentDidMount() {
    this.props.getMessages(this.props.selectedChannel);
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="message-list container">
        <h3 className="bottom-grey">Messages in #{this.props.selectedChannel}</h3>
        {
          messages.map((message) => {
            return <Message message={message} key={message.id} />;
          })
        }
        <MessageForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getMessages },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
