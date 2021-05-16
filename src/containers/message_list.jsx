import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class MessageList extends Component { //eslint-disable-line
  render() {
    console.log(this.props.messages);
    return (
      <div className="message-list">
        <h3 className="bottom-grey">Messages</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MessageList);
