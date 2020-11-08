import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="message justifyEnd">
      <p className="message__name pr-10">{trimmedName}</p>
      <div className="message__messageBox backgroundBlue">
        <p className="message__messageText colorWhite">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="message justifyStart">
      <div className="message__messageBox backgroundLight">
        <p className="message__messageText colorDark">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="message__name pl-10">{user}</p>
    </div>
  );
};

export default Message;
