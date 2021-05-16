import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import Message from "../components/message";

import { getMessages } from "../actions";

class MessageList extends Component { //eslint-disable-line
  componentDidMount() {
    this.props.getMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-list">
        <h3 className="bottom-grey">Messages in #{this.props.selectedChannel}</h3>
        {
          this.props.messages.map((message) => {
            return <Message message={message} key={message.id} />;
          })
        }
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
