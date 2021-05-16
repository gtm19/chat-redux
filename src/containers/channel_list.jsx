import React, { Component } from "react";
import { connect } from 'react-redux';

class ChannelList extends Component { //eslint-disable-line
  render() {
    return (
      <div className="channel-list">
        <h3>Channels</h3>
        <ul>
          {
            this.props.channels.map((channel) => {
              return (
                <li>#{channel}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  };
};

export default connect(mapStateToProps)(ChannelList);
