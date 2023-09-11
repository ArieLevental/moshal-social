import "./Navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUsers, faClipboard } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props) => {
  const changeMode = (modeId) => {
    props.setMainMode(modeId);
  };

  return (
    // Routing to different pages in the app
    <div className="navigation">
      <Link to="/" className="navigation-item">
        <FontAwesomeIcon className="navigation-icon" icon={faHouse} />
        <div className="navigation-icon-text">Home</div>
      </Link>
      <Link to="/users" className="navigation-item">
        <FontAwesomeIcon className="navigation-icon" icon={faUsers} />
        <div className="navigation-icon-text">DB</div>
      </Link>
      <Link to="/jobs" className="navigation-item">
        <FontAwesomeIcon className="navigation-icon" icon={faClipboard} />
        <div className="navigation-icon-text">Jobs</div>
      </Link>
    </div>
  );
};

export default Navigation;
