import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Icons.css";

const Icons = () => {
  return (
    <div className="icons">
      <FontAwesomeIcon className="icon" icon={faGear} />
      <FontAwesomeIcon className="icon" icon={faUser} />
      <FontAwesomeIcon className="icon" icon={faEnvelope} />
    </div>
  );
};

export default Icons;
