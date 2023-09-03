import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser, faEnvelope, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Icons.css";

const Icons = (props) => {
  return (
    <div className="icons">
      <FontAwesomeIcon className="icon" icon={faGear} />
      <FontAwesomeIcon className="icon" icon={faUser} />
      <FontAwesomeIcon className="icon" icon={faEnvelope} />
      <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} onClick={props.handleLogout}/>
    </div>
  );
};

export default Icons;
