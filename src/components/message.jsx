import React from "react";

const Message = (props) => {
  const niceDate = new Date(props.message.created_at).toLocaleString("en-GB");
  return (
    <div className="message">
      <p className="message-metadata">
        <span className="username">{props.message.author}</span>
        <span className="timestamp">{niceDate}</span>
      </p>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
