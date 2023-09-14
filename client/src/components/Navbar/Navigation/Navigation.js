import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    // Routing to different pages in the app
    <div className="navigation">
      <Link
        to="/"
        className={
          location.pathname === "/home"
            ? "navigation-item-active"
            : "navigation-item"
        }
      >
        <FontAwesomeIcon className="navigation-icon" icon={faHouse} />
        <div className="navigation-icon-text">Home</div>
      </Link>
      <Link
        to="/users"
        className={
          location.pathname === "/users"
            ? "navigation-item-active"
            : "navigation-item"
        }
      >
        <FontAwesomeIcon className="navigation-icon" icon={faUsers} />
        <div className="navigation-icon-text">DB</div>
      </Link>
      <Link
        to="/jobs"
        className={
          location.pathname === "/jobs"
            ? "navigation-item-active"
            : "navigation-item"
        }
      >
        <FontAwesomeIcon className="navigation-icon" icon={faClipboard} />
        <div className="navigation-icon-text">Jobs</div>
      </Link>
    </div>
  );
};

export default Navigation;
