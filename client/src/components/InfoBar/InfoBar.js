import React from "react";
import "./InfoBar.css";
import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="infoBar__leftContainer">
        <img
          className="infoBar__onlineIcon"
          alt="onlineImage"
          src={onlineIcon}
        />
        <h3>{room}</h3>
      </div>
      <div className="infoBar__rightContainer">
        <a href="/">
          <img src={closeIcon} alt="closeImage" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
