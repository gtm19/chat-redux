import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { sendMessage } from "../actions";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.sendMessage(
      this.props.selectedChannel,
      this.props.currentUsername,
      this.state.value
    );
    this.setState({
      value: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="content" type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { sendMessage },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
    currentUsername: state.currentUsername
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
