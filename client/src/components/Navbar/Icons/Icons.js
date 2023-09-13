import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faEnvelope,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Icons.css";

const Icons = (props) => {
  return (
    <div className="icons">
      <div>
        <FontAwesomeIcon className="icon" icon={faGear} />
        <a href={`/user/${props.signedUserId}`}>
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <img
            className="navbar-user-picture"
            src={props.singedUserPicturePath}
          />
        </a>
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <FontAwesomeIcon
          className="icon"
          icon={faArrowRightFromBracket}
          onClick={props.handleLogout}
        />
      </div>
    </div>
  );
};

export default Icons;
