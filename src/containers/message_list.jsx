import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import Message from "../components/message";

import { getMessages } from "../actions";

class MessageList extends Component {
  componentDidMount() {
    setInterval(() => this.props.getMessages(this.props.selectedChannel), 1000);
    this.props.ref.messageList.current.scrollTop = 300;
  }

  componentWillUnmount() {
    // TODO: unset the interval
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        <h3 className="bottom-grey">Messages in #{this.props.selectedChannel}</h3>
        {
          messages.map((message) => {
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
