import "./Navigation.css";
import { Link } from "react-router-dom";
import {
  IconHome,
  IconUsersGroup,
  IconBrandFlipboard,
} from "@tabler/icons-react";

const Navigation = (props) => {
  const changeMode = (modeId) => {
    props.setMainMode(modeId);
  };

  return (
    // Routing to different pages in the app
    <div className="navigation">
      <Link to="/" className="navigation-item">
        <IconHome className="navigation-icon" />
        <div className="navigation-icon-text">Home</div>
      </Link>
      <Link to="/users" className="navigation-item">
        <IconUsersGroup className="navigation-icon" />
        <div className="navigation-icon-text">DB</div>
      </Link>
      <Link to="/jobs" className="navigation-item">
        <IconBrandFlipboard className="navigation-icon" />
        <div className="navigation-icon-text">Jobs</div>
      </Link>
    </div>
  );
};

export default Navigation;
