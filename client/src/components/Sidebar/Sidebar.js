import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const changeMode = (modeId) => {
    props.setMainMode(modeId);
  };

  return (
    // Routing to different pages in the app
    <div className="sidebar">
      <Link to="/" className="sidebar-item">
        Home
      </Link>
      <Link to="/users" className="sidebar-item">
        Users Database
      </Link>
      <Link to="/jobs" className="sidebar-item">
        Jobs Board  
      </Link>
    </div>
  );
};

export default Sidebar;
