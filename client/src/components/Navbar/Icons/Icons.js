import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faEnvelope,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Icons.css";

const Icons = (props) => {
  return (
    <div className="icons">
      <FontAwesomeIcon className="icon" icon={faGear} title="Settings" />
      <a href={`/user/${props.signedUserId}`}>
        <img
          className="navbar-user-picture"
          src={props.singedUserPicturePath || "/assets/general/genericUser.png"}
          alt="User"
        />
      </a>
      <FontAwesomeIcon className="icon" icon={faEnvelope} title="Mail" />
      <FontAwesomeIcon
        className="icon"
        icon={faArrowRightFromBracket}
        title="Logout"
        onClick={props.handleLogout}
      />
    </div>
  );
};

export default Icons;
