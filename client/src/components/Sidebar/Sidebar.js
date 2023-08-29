import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const changeMode = (modeId) => {
    props.setMainMode(modeId);
  };

  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-item">
        Home
      </Link>
      <Link to="/users" className="sidebar-item">
        Users database
      </Link>
      <Link to="/404notFound" className="sidebar-item">
        Job sharing
      </Link>
    </div>
  );
};

export default Sidebar;
